import { useLanguage } from '../context/LanguageContext'

const CourseSectionManagement = () => {
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.pages.courseSection.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">{t.pages.courseSection.description}</p>
      </div>
    </div>
  )
}

export default CourseSectionManagement

