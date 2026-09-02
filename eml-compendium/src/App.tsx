import { useState, useEffect } from 'react'
import { TechnologyGrid } from './components/TechnologyGrid'
import { TechnologyDetail } from './components/TechnologyDetail'
import type { Technology } from './types/Technology'
import './App.css'

function App() {
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null)
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Dynamically import all JSON files from the technologies folder
    const loadTechnologies = async () => {
      const modules = import.meta.glob<{ default: Technology }>('./data/technologies/*.json')
      const technologyPromises = Object.values(modules).map((importFn) => importFn())
      const technologyModules = await Promise.all(technologyPromises)
      const loadedTechnologies = technologyModules.map((module) => module.default)
      setTechnologies(loadedTechnologies)
      setLoading(false)
    }

    loadTechnologies()
  }, [])

  if (loading) {
    return (
      <div className="app loading">
        <div className="loading-spinner">Loading technologies...</div>
      </div>
    )
  }

  return (
    <div className="app">
      <TechnologyGrid 
        technologies={technologies}
        onSelectTechnology={setSelectedTechnology}
      />
      
      {selectedTechnology && (
        <TechnologyDetail 
          technology={selectedTechnology}
          onClose={() => setSelectedTechnology(null)}
        />
      )}
    </div>
  )
}

export default App
