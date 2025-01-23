import SettingIcon from '../../assets/icons/setting-line.svg?react'
import BrightnessIcon from '../../assets/icons/brightness-line.svg?react'
import { Hour } from '../shared/Hour'

export const Header = () => {
  const hours = [
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: true, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: false },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
    { isActive: false, isFilled: true },
  ]

  return (
    <header className="fixed top-4 left-[50%] translate-x-[-50%] text-center">
      <div className="grid grid-flow-col auto-cols-auto gap-4">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer opacity-25 hover:opacity-100">
          <BrightnessIcon className="w-8 h-8 fill-current text-blue-500" />
        </div>
        <div className="flex justify-center items-center w-auto h-10 bg-white p-2 rounded-full overflow-hidden opacity-25 hover:opacity-100">
          {hours.map((hour, index) => (
            <Hour key={index} isActive={hour.isActive} isFilled={hour.isFilled} />
          ))}
        </div>
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer opacity-25 hover:opacity-100">
          <SettingIcon className="w-8 h-8 fill-current text-blue-500" />
        </div>
      </div>
    </header>
  )
}