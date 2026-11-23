import PlaceholderPage from '../components/common/PlaceholderPage.jsx'

export default function AIRecommendations() {
  return (
    <PlaceholderPage
      title="AI Recommendations"
      description="Describe your project and get suggestions for the right equipment and workspace."
      icon="zap"
      plannedFeatures={[
        'Project description input',
        'Recommended equipment and workspaces',
        'Short explanation for each suggestion',
        'One-click jump to book a recommendation',
      ]}
    />
  )
}