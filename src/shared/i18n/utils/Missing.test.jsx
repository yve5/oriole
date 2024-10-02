import en from '../dictionaries/en';
import fr from '../dictionaries/fr';
import { checkMissingTerms } from '.';

describe('checkMissingTerms', () => {
  const firstTermsEn = {
    LANGUAGE: 'English',
    LOCALE: 'enUS',
    LANG: 'en',
  };

  const firstTermsFr = {
    LANGUAGE: 'Français',
    LOCALE: 'fr',
    LANG: 'fr',
  };

  it('should detect fake missing terms. default', () => {
    expect(checkMissingTerms(en, fr)).toEqual([]);
  });

  it('should detect fake missing terms. actions, assistance', () => {
    expect(
      checkMissingTerms(
        {
          ...firstTermsEn,
          Actions: 'Actions',
          Back: 'Back',
          Assistance: 'Assistance',
        },
        {
          ...firstTermsFr,
          Back: 'Retour',
        }
      )
    ).toEqual(['Actions', 'Assistance']);
  });

  it('should detect fake missing terms. id, assistance, actions', () => {
    expect(
      checkMissingTerms(
        {
          ...firstTermsEn,
          Back: 'Back',
          ID: 'ID',
        },
        {
          ...firstTermsFr,
          Assistance: 'Assistance',
          Actions: 'Actions',
          Back: 'Retour',
        }
      )
    ).toEqual(['ID', 'Assistance', 'Actions']);
  });

  it('should detect fake missing terms. id', () => {
    expect(
      checkMissingTerms(
        {
          ...firstTermsEn,
          Back: 'Back',
        },
        {
          ...firstTermsFr,
          Back: 'Retour',
          ID: 'ID',
        }
      )
    ).toEqual(['ID']);
  });
});
