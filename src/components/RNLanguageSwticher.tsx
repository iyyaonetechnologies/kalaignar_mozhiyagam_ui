import { useTranslation } from 'react-i18next';

export default function RNLanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language; // e.g., "en", "ta"

  const langs = [
    { code: 'ta', label: 'TA' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex gap-3">
      {langs.map((lang) => {
        const isSelected = currentLang.startsWith(lang.code);

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`
              px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer
              ${
                isSelected
                  ? 'bg-[var(--RN-Blue-100)] text-[var(--RN-Base-0)] shadow-md'
                  : 'bg-[var(--RN-Base-10)] text-[var(--RN-Base-80)] hover:bg-[var(--RN-Base-20)] hover:text-[var(--RN-Base-100)]'
              }
            `}
            style={{
              boxShadow: isSelected ? '0 0 8px var(--RN-Blue-100)' : 'none',
              border: isSelected ? '1px solid var(--RN-Blue-300)' : '1px solid transparent',
            }}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
