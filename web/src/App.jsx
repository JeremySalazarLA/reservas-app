// web/src/App.jsx
import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { useAuth } from "./contexts/AuthContext";
import {
  fetchBookings,
  deleteBooking,
  updateBooking
} from "./services/bookings";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import { auth } from "./firebase";
import styled from "styled-components";
import { colors } from "./theme";

export default function App() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBooking, setEditingBooking] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [activeTab, setActiveTab] = useState("new");

  useEffect(() => {
    if (!user) return;
    fetchBookings(user.uid)
      .then(data => setBookings(data))
      .finally(() => setLoading(false));
  }, [user]);

  // Crear nueva cita
  const handleNew = newB => {
    setBookings(prev => [...prev, newB]);
    setActiveTab("list");
  };

  // Actualizar cita existente
  const handleUpdate = updated => {
    setBookings(prev =>
      prev.map(b => (b.id === updated.id ? updated : b))
    );
    setEditingBooking(null);
    setActiveTab("list");
  };

  // Iniciar edición
  const onEditClick = id => {
    const b = bookings.find(x => x.id === id);
    if (b) {
      setEditingBooking(b);
      setActiveTab("new");
    }
  };

  // Borrar cita
  const onDeleteClick = id => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    if (deleteId) {
      await deleteBooking(deleteId);
      setBookings(prev => prev.filter(b => b.id !== deleteId));
    }
    setShowDeleteModal(false);
    setDeleteId(null);
  };
  const cancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  // Cerrar sesión
  const onLogoutClick = () => setShowLogoutModal(true);
  const confirmLogout = () => {
    setShowLogoutModal(false);
    signOut(auth);
  };
  const cancelLogout = () => setShowLogoutModal(false);

  if (loading) {
    return (
      <Centered>
        <Spinner />
      </Centered>
    );
  }

  return (
    <AppContainer>
      {/* Panel de usuario */}
      <UserPanel>
        <Username>{user.displayName || user.email}</Username>
        <LogoutButton onClick={onLogoutClick}>Cerrar sesión</LogoutButton>
        <VerticalTabs>
          <TabButton
            active={activeTab === "new"}
            onClick={() => {
              setEditingBooking(null);
              setActiveTab("new");
            }}
          >
            Agendar cita
          </TabButton>
          <TabButton
            active={activeTab === "list"}
            onClick={() => setActiveTab("list")}
          >
            Mis citas
          </TabButton>
        </VerticalTabs>
      </UserPanel>

      {/* Contenido principal */}
      <MainContent>
        {activeTab === "new" && (
          <AppointmentForm
            onNew={handleNew}
            booking={editingBooking}
            onUpdate={handleUpdate}
          />
        )}
        {activeTab === "list" && (
          <>
            <SectionTitle>Mis citas agendadas</SectionTitle>
            <AppointmentList
              bookings={bookings}
              onDelete={onDeleteClick}
              onEdit={onEditClick}
            />
          </>
        )}
      </MainContent>

      {/* Modal cerrar sesión */}
      {showLogoutModal && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>¿Seguro que deseas cerrar sesión?</ModalText>
            <ModalActions>
              <ModalBtnCancel onClick={cancelLogout}>Cancelar</ModalBtnCancel>
              <ModalBtnConfirm onClick={confirmLogout}>
                Cerrar sesión
              </ModalBtnConfirm>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* Modal borrar cita */}
      {showDeleteModal && (
        <ModalOverlay>
          <ModalBox>
            <ModalText>¿Seguro deseas cancelar esta cita?</ModalText>
            <ModalActions>
              <ModalBtnCancel onClick={cancelDelete}>No</ModalBtnCancel>
              <ModalBtnConfirm onClick={confirmDelete}>
                Sí, cancelar
              </ModalBtnConfirm>
            </ModalActions>
          </ModalBox>
        </ModalOverlay>
      )}
    </AppContainer>
  );
}

// Styled Components
const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: ${colors.bgLight};
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${colors.bgLight};
`;
const Spinner = styled.div`
  border: 4px solid ${colors.bgLight};
  border-top: 4px solid ${colors.primaryStart};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
const UserPanel = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 480px) {
    position: static;
    padding: 16px;
    background: ${colors.bgLight};
  }
`;
const Username = styled.span`
  font-weight: 600;
  color: ${colors.textDark};
  margin-bottom: 8px;
`;
const LogoutButton = styled.button`
  background: linear-gradient(
    135deg,
    ${colors.primaryStart},
    ${colors.primaryEnd}
  );
  color: #fff;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    opacity: 0.9;
  }
`;
const VerticalTabs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 3cm;
`;
const TabButton = styled.button`
  padding: 8px 12px;
  background: ${({ active }) =>
    active ? `${colors.primaryStart}` : "#ccc"};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`;
const MainContent = styled.div`
  padding: 80px 20px 40px;
  max-width: 600px;
  margin: 0 auto;
`;
const SectionTitle = styled.h2`
  color: ${colors.textDark};
  margin: 24px 0 12px;
`;
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const ModalBox = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  max-width: 320px;
  width: 90%;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;
const ModalText = styled.p`
  margin: 0 0 16px;
  color: ${colors.textDark};
  font-size: 1rem;
  text-align: center;
`;
const ModalActions = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalBtnCancel = styled.button`
  background: ${colors.bgLight};
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
`;
const ModalBtnConfirm = styled.button`
  background: linear-gradient(
    135deg,
    ${colors.primaryStart},
    ${colors.primaryEnd}
  );
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
`;
