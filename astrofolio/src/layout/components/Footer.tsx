import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-bios-panel p-2 mt-4 text-black text-xs border border-bios-border">
            <div className="flex justify-between">
            <span>© {new Date().getFullYear()} | AstronautMarkus_Astrofolio V3.0</span>
            </div>
        </footer>
    );
};

export default Footer;