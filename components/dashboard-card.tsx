import { ReactNode } from 'react'
import { Car } from 'lucide-react'

type DashboardCardProps = {
  icon: ReactNode,
  text: string,
  value: number
}

const DashboardCard = ({ icon, text, value }: DashboardCardProps) => {
  return (
    <div className='bg-white shadow-md rounded-lg flex items-center justify-between px-6 py-6 min-h-32'>
      {icon}
      <div className='flex flex-col gap-3 items-end'>
        <p className='text-black/50 text-sm'>{text}</p>
        <h4 className='font-semibold text-3xl'>{value}</h4>
      </div>
    </div>
  )
}

export default DashboardCard