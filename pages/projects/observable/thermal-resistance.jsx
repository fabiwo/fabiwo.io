import nb from '@fawol/visualizing-thermal-resistance-rth-plane-wall'
import ObservableEmbed, { ObservableLayout } from '@/components/ObservableHq'

// Example on how to embed observable notebook
export default function ThermalResistance() {
  return (
    <ObservableLayout>
      <ObservableEmbed notebook={nb} />+
    </ObservableLayout>
  )
}
