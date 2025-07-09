// web/src/components/AppointmentList.jsx
import styled from "styled-components";
import { colors } from "../theme";

export default function AppointmentList({ bookings, onDelete, onEdit }) {
  if (!bookings.length) return <p>No tienes citas agendadas.</p>;

  return (
    <List>
      {bookings.map(b => (
        <Card key={b.id}>
          <Row>
            <strong>Dr(a). {b.doctor}</strong>
            <Edit onClick={() => onEdit(b.id)}>✏️</Edit>
            <Delete onClick={() => onDelete(b.id)}>🗑️</Delete>
          </Row>
          <Small>Fecha: {new Date(b.start).toLocaleDateString()}</Small>
          <Small>Hora:  {new Date(b.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Small>
          <Small>Motivo: {b.reason}</Small>
          <Small>Teléfono: {b.phone}</Small>
        </Card>
      ))}
    </List>
  );
}

// Styled
const List = styled.div`
  display: grid;
  gap: 16px;
`;
const Card = styled.div`
  background: ${colors.cardBg}; padding: 16px; border-radius: 12px;
  box-shadow: 0 2px 8px rgba(93,120,255,0.1);
`;
const Row = styled.div`
  display: flex; justify-content: space-between; align-items: center;
`;
const Delete = styled.button`
  background: none; border: none; font-size: 1.2rem; cursor: pointer;
  &:hover { color: ${colors.error}; }
`;
const Edit = styled.button`
  background: none; border: none; font-size: 1.2rem; margin-right: 8px; cursor: pointer;
  &:hover {
    color: ${colors.primaryStart};
  }
`;
const Small = styled.p`
  margin: 4px 0; font-size: 0.9rem; color: ${colors.textMuted};
`;
