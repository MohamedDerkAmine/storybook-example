import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';

export interface InfoCardProps {
  /** Card title */
  title: string;
  /** Card description text */
  description: string;
  /** Optional actions (buttons) at the bottom of the card */
  actions?: ReactNode;
  /** Max width in px */
  maxWidth?: number;
}

export function InfoCard({ title, description, actions, maxWidth = 345 }: InfoCardProps) {
  return (
    <MuiCard sx={{ maxWidth }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  );
}
