import { NavItem } from '../../components/NavItem';
import { Terminal, Code, User, Briefcase, Mail } from "lucide-react"


import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <nav className="text-black bg-bios-panel p-2 md:w-48 space-y-1 border border-bios-border">
          <NavItem
            icon={<Terminal size={16} />}
            label="Home"
            active={location.pathname === "/"}
            to="/"
          />
          <NavItem
            icon={<User size={16} />}
            label="About"
            active={location.pathname === "/about"}
            to="/about"
          />
          <NavItem
            icon={<Code size={16} />}
            label="Projects"
            active={location.pathname === "/projects"}
            to="/projects"
          />
          <NavItem
            icon={<Briefcase size={16} />}
            label="Experience"
            active={location.pathname === "/experience"}
            to="/experience"
          />
          <NavItem
            icon={<Mail size={16} />}
            label="Contact"
            active={location.pathname === "/contact"}
            to="/contact"
          />
        </nav>
    );
};

export default Sidebar;