// web/src/Login.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import styled, { keyframes } from 'styled-components';
import { useAuth } from './contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isNew, setIsNew] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touchedPwd, setTouchedPwd] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Password validation
  const validLength = password.length >= 8;
  const hasUpper   = /[A-Z]/.test(password);
  const hasLower   = /[a-z]/.test(password);
  const hasNumber  = /\d/.test(password);

  // Redirect if already logged in
  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      if (isNew) {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(cred.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      // actual redirect happens in useEffect
    } catch (err) {
      setError(err.code || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <ParticleBackground>
        {[...Array(15)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </ParticleBackground>
      <WaveEffect delay="0s" />
      <WaveEffect delay="3s" />

      <Card>
        <Logo>PlanMedic</Logo>
        <Tagline>{isNew ? 'Regístrate' : 'Inicia Sesión'}</Tagline>

        <Form onSubmit={handleSubmit}>
          {isNew && (
            <Group>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder=" "
                required
              />
              <Label>Nombre completo</Label>
            </Group>
          )}

          <Group>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder=" "
              required
            />
            <Label>Correo electrónico</Label>
          </Group>

          <Group>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={() => setTouchedPwd(true)}
              placeholder=" "
              required
            />
            <Label>Contraseña</Label>
            {isNew && touchedPwd && (
              <Help>
                <li style={{ color: validLength ? 'lightgreen' : 'salmon' }}>
                  Mínimo 8 caracteres
                </li>
                <li style={{ color: hasUpper ? 'lightgreen' : 'salmon' }}>
                  Al menos una mayúscula
                </li>
                <li style={{ color: hasLower ? 'lightgreen' : 'salmon' }}>
                  Al menos una minúscula
                </li>
                <li style={{ color: hasNumber ? 'lightgreen' : 'salmon' }}>
                  Al menos un número
                </li>
              </Help>
            )}
          </Group>

          {error && <Error>{error}</Error>}

          <Forgot type="button" onClick={() => alert('Función no implementada')}>
            ¿Olvidaste tu contraseña?
          </Forgot>

          <Button
            type="submit"
            disabled={
              loading ||
              (isNew && !(validLength && hasUpper && hasLower && hasNumber))
            }
          >
            {loading
              ? '…Procesando'
              : isNew
              ? 'REGISTRAR'
              : 'ACCEDER'}
          </Button>
        </Form>

        <Switch>
          {isNew ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
          <Toggle onClick={() => {
            setIsNew(!isNew);
            setError('');
            setName('');
            setPassword('');
            setTouchedPwd(false);
          }}>
            {isNew ? 'Inicia sesión' : 'Regístrate'}
          </Toggle>
        </Switch>
      </Card>
      <Glow />
    </LoginContainer>
  );
}

// Animations
const floatAnim = keyframes`
  0%,100% { transform: translate(0); }
  50% { transform: translate(15px,-15px); }
`;
const waveAnim = keyframes`
  0% { transform: scale(0); opacity: 1; }
  80% { opacity: 0.7; }
  100% { transform: scale(8); opacity: 0; }
`;
const pulseAnim = keyframes`
  0%,100% { opacity: 0.3; }
  50% { opacity: 0.8; }
`;

// Styled Components
const LoginContainer = styled.div`
  & * { box-sizing: border-box; }
  display: flex; justify-content: center; align-items: center;
  min-height: 100vh; background: linear-gradient(135deg,#0f172a,#1e293b);
  position: relative; padding: 16px;
`;
const ParticleBackground = styled.div`
  position: absolute; inset: 0; z-index: 0; pointer-events: none;
`;
const Particle = styled.div`
  position: absolute;
  width: ${props => 2 + props.index % 3}px;
  height: ${props => 2 + props.index % 3}px;
  background: ${props => ['rgba(93,120,255,0.5)','rgba(58,86,232,0.4)','rgba(255,255,255,0.3)'][props.index % 3]};
  border-radius: 50%;
  top: ${() => Math.random()*100}%;
  left: ${() => Math.random()*100}%;
  animation: ${floatAnim} ${props => 8 + props.index}s ease-in-out infinite;
`;
const WaveEffect = styled.div`
  position: absolute; width: 80px; height: 80px; border-radius: 50%;
  background: rgba(93,120,255,0.1);
  animation: ${waveAnim} 6s linear infinite;
  animation-delay: ${props => props.delay};
  z-index: 1;
`;
const Card = styled.div`
  position: relative;
  background: rgba(15,23,42,0.85);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  padding: 32px;
  width:100%; max-width:360px; z-index:2; overflow:hidden;
  border:1px solid rgba(93,120,255,0.2);
  &::before {
    content: ''; position:absolute; inset:-50%;
    background:linear-gradient(45deg,rgba(93,120,255,0.15),transparent);
    transform:rotate(25deg);
    animation:${pulseAnim} 10s ease-in-out infinite;
    z-index:-1;
  }
`;
const Logo = styled.h1`
  margin:0 0 8px; color:#fff; font-size:2.25rem; text-align:center;
  text-shadow:0 0 8px rgba(93,120,255,0.5);
`;
const Tagline = styled.p`
  margin:0 0 24px; color:#94a3b8; font-size:1rem; text-align:center;
`;
const Form = styled.form`
  display:flex; flex-direction:column; gap:16px;
`;
const Group = styled.div`
  position:relative;
`;
const Input = styled.input`
  width:100%; padding:14px 16px; border-radius:8px;
  border:1px solid #ccc; background:#fff; font-size:1rem;
  &:focus { outline:none; border-color:#5d78ff; }
`;
const Label = styled.label`
  position:absolute; top:-8px; left:12px; background:#fff;
  padding:0 6px; font-size:0.75rem; color:#333;
`;
const Help = styled.ul`
  margin:4px 0 0; padding-left:20px; font-size:0.75rem; list-style:disc;
`;
const Error = styled.p`
  color:#f87171; font-size:0.875rem; text-align:center; margin:0;
`;
const Forgot = styled.button`
  align-self:flex-end; background:none; border:none;
  color:#5d78ff; cursor:pointer; font-size:0.875rem;
  &:hover { color:#818cf8; }
`;
const Button = styled.button`
  padding:14px; border:none; border-radius:8px;
  background:linear-gradient(135deg,#5d78ff,#3a56e8);
  color:#fff; font-size:1rem; font-weight:600; cursor:pointer;
  &:disabled { background:#5d78ff80; cursor:not-allowed; }
`;
const Switch = styled.p`
  text-align:center; margin-top:16px; color:#94a3b8;
`;
const Toggle = styled.button`
  background:none; border:none; color:#5d78ff; cursor:pointer; font-weight:600;
`;
const Glow = styled.div`
  position:absolute; width:250px; height:250px;
  background:radial-gradient(circle,rgba(93,120,255,0.3),rgba(93,120,255,0)70%);
  top:-80px; right:-80px; filter:blur(20px); z-index:1;
  animation:${pulseAnim} 6s ease-in-out infinite;
`;
