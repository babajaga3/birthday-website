import { createContext, useState } from "react"

interface IBirthdayContext {
  isBirthday: boolean
  setIsBirthday: (value: boolean) => void
}

export const BirthdayContext = createContext<IBirthdayContext | null>(null)

export function BirthdayContextProvider({ children }: { children: React.ReactNode }) {
  const [isBirthday, setIsBirthday] = useState(false)

  return (
    <BirthdayContext.Provider value={{
      isBirthday,
      setIsBirthday
    }}>
      {children}
    </BirthdayContext.Provider>
  )
}