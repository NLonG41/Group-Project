import { useLanguage } from '../context/LanguageContext'

const SubjectManagement = () => {
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.pages.subjectManagement.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">{t.pages.subjectManagement.description}</p>
      </div>
    </div>
  )
}

export default SubjectManagement

