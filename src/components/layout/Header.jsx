import SettingIcon from '../../assets/icons/setting-line.svg?react'

export const Header = () => {
  return (
    <header className="fixed top-4 left-[50%] translate-x-[-50%] text-center">
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer opacity-25 hover:opacity-100">
        <SettingIcon className="w-8 h-8 fill-current text-blue-500" />
      </div>
      <div></div>
      <div></div>
    </header>
  )
}