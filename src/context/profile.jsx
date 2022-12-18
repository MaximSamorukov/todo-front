import React, { useState, createContext, useMemo } from "react";

const dafaultProfile = {
   role: 'user',
}

export const ProfileContext = createContext(null);

const ProfileProvider = ({ children }) => {
   const [profile, setProfile] = useState(dafaultProfile);
   const isAdmin = useMemo(() => profile?.role === 'admin', [profile]);
   return (
      <ProfileContext.Provider value={{ profile, setProfile, isAdmin }}>
         { children }
      </ProfileContext.Provider>
   )
}

export default ProfileProvider;