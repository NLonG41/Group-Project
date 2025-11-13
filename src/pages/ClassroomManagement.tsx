import { useLanguage } from '../context/LanguageContext'

const ClassroomManagement = () => {
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.pages.classroomManagement.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">{t.pages.classroomManagement.description}</p>
      </div>
    </div>
  )
}

export default ClassroomManagement

