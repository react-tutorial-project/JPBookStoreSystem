import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../component/Navbar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.css';

const Layout = () => {
    const location = useLocation();
    const nodeRef = useRef(null); // 💡 Create a nodeRef

    return (
        <div>
            <Navbar />
            <SwitchTransition>
                <CSSTransition
                    key={location.pathname}
                    timeout={200}
                    classNames="fade"
                    nodeRef={nodeRef} // 💡 Pass it here
                    unmountOnExit
                >
                    <div ref={nodeRef} className="max-w-6xl mx-auto p-3">
                        <Outlet />
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default Layout;
