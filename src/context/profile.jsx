import React, { useState, createContext, useMemo } from "react";

const dafaultProfile = {
   role: null,
}

export const ProfileContext = createContext(null);

const ProfileProvider = ({ children }) => {
   const [profile, setProfile] = useState(dafaultProfile);
   const isAdmin = useMemo(() => profile?.role === 'admin', [profile]);
   const isUser = useMemo(() => profile?.role === 'user', [profile])
   return (
      <ProfileContext.Provider value={{ profile, setProfile, isAdmin, isUser }}>
         { children }
      </ProfileContext.Provider>
   )
}

export default ProfileProvider;