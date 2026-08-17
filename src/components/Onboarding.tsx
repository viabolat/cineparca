import type { CopyKey } from '../i18n/copy';
import { PinIcon } from './icons';

interface Props {
  t: Record<CopyKey, string>;
  onEnableLocation: () => void;
  onSkip: () => void;
}

export function Onboarding({ t, onEnableLocation, onSkip }: Props) {
  return (
    <div className="cp-onboarding">
      <div className="cp-onboarding-icon">
        <PinIcon />
      </div>
      <div>
        <div className="cp-onboarding-title">CineParca</div>
        <p className="cp-onboarding-subtitle">{t.onboardSubtitle}</p>
      </div>
      <div className="cp-onboarding-actions">
        <button type="button" className="btn btn-primary btn-block" onClick={onEnableLocation}>
          {t.enableLocation}
        </button>
        <button type="button" className="btn btn-ghost btn-block" onClick={onSkip}>
          {t.notNow}
        </button>
      </div>
      <p className="cp-onboarding-privacy">{t.privacyOnboard}</p>
    </div>
  );
}
