import { LaptopIcon, SmartphoneIcon } from "lucide-react"

export const pairDevices: Record<
  string,
  { icon: React.ReactNode; model: string; id: string }
> = {
  Computer: {
    icon: <LaptopIcon className="size-5" />,
    model: "Macbook M1 Pro",
    id: "jhonyrdesouza-macbook-m1-pro",
  },
  Smartphone: {
    icon: <SmartphoneIcon className="size-5" />,
    model: "iPhone 14",
    id: "jhonyrdesouza-iphone-14",
  },
}
