import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { type ReactNode } from 'react';
import { Stack } from '../Stack';
import { Heading } from '../Heading';
import { Eyebrow } from '../Eyebrow';
import { Button } from '../Button';
import { Badge } from '../Badge';

interface CtaProps {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface HeroProps {
  /** Optional small accent label above the heading. */
  eyebrow?: string;
  /** The main heading. The portion in `highlight` gets gradient styling. */
  title: string;
  /** Optional substring of `title` to render with the brand gradient. */
  highlight?: string;
  /** Subtitle / body paragraph. */
  subtitle?: ReactNode;
  /** Primary call-to-action button. */
  primaryCta?: CtaProps;
  /** Secondary call-to-action button (rendered as outline). */
  secondaryCta?: CtaProps;
  /** Optional small badge displayed inline next to the eyebrow. */
  badge?: { label: string; tone?: 'brand' | 'success' | 'warning' };
  /** Layout alignment. Defaults to 'center'. */
  align?: 'start' | 'center';
}

export function Hero({
  eyebrow,
  title,
  highlight,
  subtitle,
  primaryCta,
  secondaryCta,
  badge,
  align = 'center',
}: HeroProps) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return <Heading as="h1" size="display" align={align}>{title}</Heading>;
    }
    const [before, after] = title.split(highlight);
    return (
      <Heading as="h1" size="display" align={align}>
        {before}
        <Box component="span" sx={{
          background: 'linear-gradient(135deg, #4f46e5 0%, #8b5cf6 50%, #ec4899 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          {highlight}
        </Box>
        {after}
      </Heading>
    );
  };

  return (
    <Box
      component="section"
      aria-labelledby="hero-heading"
      sx={{
        paddingBlock: { xs: 8, md: 12 },
        paddingInline: { xs: 3, md: 6 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align === 'center' ? 'center' : 'left',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in srgb, currentColor 8%, transparent), transparent)',
          color: 'primary.main',
          pointerEvents: 'none',
          zIndex: 0,
        },
      }}
    >
      <Stack gap={3} align={align === 'center' ? 'center' : 'start'}>
        {(eyebrow || badge) && (
          <Stack direction="row" gap={1.5} align="center">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {badge && <Badge tone={badge.tone ?? 'brand'} variant="soft" size="sm">{badge.label}</Badge>}
          </Stack>
        )}

        <Box
          id="hero-heading"
          sx={{
            maxWidth: { xs: '100%', sm: '56rem' },
            mx: align === 'center' ? 'auto' : 0,
            textWrap: 'balance',
          }}
        >
          {renderTitle()}
        </Box>

        {subtitle && (
          <Typography
            variant="body1"
            sx={{
              maxWidth: '52ch',
              color: 'text.secondary',
              fontSize: { xs: '1.0625rem', md: '1.1875rem' },
              lineHeight: 1.55,
            }}
          >
            {subtitle}
          </Typography>
        )}

        {(primaryCta || secondaryCta) && (
          <Stack direction="row" gap={1.5} wrap>
            {primaryCta && (
              <Button
                variant="solid"
                tone="brand"
                size="lg"
                onClick={primaryCta.onClick}
                href={primaryCta.href}
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                variant="outline"
                tone="neutral"
                size="lg"
                onClick={secondaryCta.onClick}
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </Button>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
