import React from 'react'; 
import './homepage.styles.scss'

// didnt work with square brackets but did with normal ones to render menu () - {}
const HomePage = () => (

    <div className='homepage'>
        {/* need a container for the menu itself and then one used for each container item */}
        <div className='directory-menu'>
                {/* item 1 */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                {/* item 2 */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>JACKETS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                {/* item 3 */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SNEAKERS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                {/* item 4 */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>WOMENS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>
                {/* item 5 */}
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MENS</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

        </div>

    </div>
)



export default HomePage; 