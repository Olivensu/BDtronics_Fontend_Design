"use client"

export default function Categories() {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-medium text-center mb-6">Categories</h1>
        
        <div className="flex flex-wrap gap-x-16 justify-around">
          <div>
            <ul className="list-disc space-y-2">
              <li>DAILY DEALS</li>
              <li>New Arrivals</li>
              <li>Shop by Brand</li>
              <li>Custom Services</li>
              <li>Arduino, SBC & Prototyping
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Development Boards
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li>Arduino</li>
                      <li>Raspberry Pi</li>
                      <li>Edge AI & Machine Learning</li>
                      <li>Single Board Computers</li>
                      <li>Software Defined Radio (SDR)</li>
                      <li>STM32</li>
                      <li>ESP/ ESP32/ Node MCU</li>
                      <li>Leaflabs</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Modules</li>
              <li>Sensors</li>
              <li>Shields</li>
              <li>Breakout Board</li>
              <li>Breadboards</li>
              <li>Stripeboard & PCB</li>
              <li>USB-Serial Adapters</li>
            </ul>
          </div>
  
          <div>
            <ul className="list-disc space-y-2">
              <li>Lead Acid Batteries</li>
              <li>NiMh/ NiCd Batteires</li>
              <li>LTO Batteries</li>
              <li>Battery Chargers & BMS</li>
              <li>Battery Accessories</li>
              <li>Displays (LED/LCD/OLED)</li>
              <li>Components
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Active Components
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                      <li>Transistor</li>
                      <li>Diode</li>
                      <li>LEDs</li>
                      <li>ICs</li>
                      <li>Op-amps</li>
                      <li>FETs</li>
                      <li>Voltage Regulars</li>
                      <li>Microcontrollers/ MCU</li>
                      <li>IGBTs</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Switches
                <ul className="list-disc ml-6 mt-2 space-y-2">
                  <li>Momentary</li>
                  <li>Toggle</li>
                  <li>SPST</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  
