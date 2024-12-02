import '@styles/globals.css';
import 'animate.css';
import VantaBackground from '@components/VantaBackground';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import FlareCursor from '@components/FlareCoursor';
export const metadata = {
  title: 'BlogVana',
  description: 'Discover what you like',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative overflow-x-hidden">
  
      <VantaBackground  />
        <FlareCursor/>
        {/* Provider and Main Content */}
        
        <Provider>
          <Nav className="animate__animated animate__backInUp" />
          <div className="relative z-10 animate__animated animate__backInUp">{children}</div> {/* Ensure children are above Vanta */}
        </Provider>
        
      </body>
    </html>
  );
}
