import { useLanguage } from '../context/LanguageContext'

const Dashboard = () => {
  const { t } = useLanguage()

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{t.pages.dashboard.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t.pages.dashboard.totalStudents}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
            </div>
            <div className="text-4xl">👨‍🎓</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t.pages.dashboard.totalTeachers}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
            </div>
            <div className="text-4xl">👨‍🏫</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t.pages.dashboard.totalSubjects}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
            </div>
            <div className="text-4xl">📚</div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{t.pages.dashboard.totalClassrooms}</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">0</p>
            </div>
            <div className="text-4xl">🏫</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

