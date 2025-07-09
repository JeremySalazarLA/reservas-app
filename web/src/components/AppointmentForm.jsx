// web/src/components/AppointmentForm.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createBooking, updateBooking } from "../services/bookings";
import { useAuth } from "../contexts/AuthContext";
import { colors } from "../theme";

export default function AppointmentForm({ onNew, booking, onUpdate }) {
  const { user } = useAuth();
  const isEditMode = Boolean(booking);

  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Inicializa el formulario al entrar en modo edición
  useEffect(() => {
    if (booking) {
      setDoctor(booking.doctor);
      setDate(booking.start.slice(0, 10));
      setTime(new Date(booking.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setReason(booking.reason);
      setPhone(booking.phone);
    }
  }, [booking]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Construye start y end
    const start = new Date(`${date}T${time}`).toISOString();
    const end = new Date(new Date(start).getTime() + 30 * 60000).toISOString();

    const data = {
      userId: user.uid,
      doctor,
      start,
      end,
      reason,
      phone,
      type: "médica",
      createdAt: booking?.createdAt || Date.now(),
    };

    try {
      if (isEditMode) {
        // Actualiza cita existente
        await updateBooking(booking.id, data);
        onUpdate({ id: booking.id, ...data });
      } else {
        // Crea nueva cita
        const id = await createBooking(data);
        onNew({ id, ...data });
        // Limpia inputs solo en modo creación
        setDoctor("");
        setDate("");
        setTime("");
        setReason("");
        setPhone("");
      }
    } catch (err) {
      console.error("Error guardando cita:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>{isEditMode ? "Editar cita médica" : "Nueva cita médica"}</Title>

      <Field>
        <Label>Doctor</Label>
        <Input
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          placeholder="Nombre del doctor"
          required
        />
      </Field>

      <Field>
        <Label>Fecha</Label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </Field>

      <Field>
        <Label>Hora</Label>
        <Input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </Field>

      <Field>
        <Label>Motivo</Label>
        <TextArea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Describe tus síntomas"
          required
        />
      </Field>

      <Field>
        <Label>Teléfono</Label>
        <Input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+593 9..."
          required
        />
      </Field>

      <Submit disabled={loading}>
        {loading
          ? "Procesando…"
          : isEditMode
          ? "Guardar cambios"
          : "Agendar cita"}
      </Submit>
    </Form>
  );
}

// Styled Components
const Form = styled.form`
  background: ${colors.cardBg};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(93,120,255,0.2);
  margin-bottom: 30px;
`;
const Title = styled.h3`
  margin: 0 0 16px;
  color: ${colors.textDark};
  text-align: center;
`;
const Field = styled.div`margin-bottom: 16px;`;
const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: ${colors.textDark};
`;
const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid ${colors.bgLight};
  border-radius: 8px;
  font-size: 1rem;
  &:focus { border-color: ${colors.primaryStart}; }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 2px solid ${colors.bgLight};
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  &:focus { border-color: ${colors.primaryStart}; }
`;
const Submit = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, ${colors.primaryStart}, ${colors.primaryEnd});
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;
