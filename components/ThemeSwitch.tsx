'use client';
import classNames from 'classnames';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={e => setTheme(e.target.value)} >
      <option value="system">系统主题</option>
      <option value="dark">
        暗黑
      </option>
      <option value="light">
        明亮
      </option>
    </select>
  )
}

export default ThemeSwitch