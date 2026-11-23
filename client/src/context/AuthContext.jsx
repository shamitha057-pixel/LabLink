import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

/**
 * Authentication Context Provider.
 * Structured to seamlessly plug in Firebase Auth in future phases.
 */
export function AuthProvider({ children }) {
  // Temporary mock state to demonstrate student and admin views without backend/firebase
  const [user, setUser] = useState({
    uid: 'demo-student-101',
    name: 'Alex Rivera',
    email: 'alex.rivera@university.edu',
    role: 'STUDENT',
    department: 'Electrical & Computer Engineering',
  });

  const [loading, setLoading] = useState(false);

  // Switch role helper for demonstration in the prototype
  const switchRole = (role) => {
    setUser((prev) => ({
      ...prev,
      role: role,
      name: role === 'ADMIN' ? 'Dr. Elizabeth Vance (Lab Manager)' : 'Alex Rivera (Student)',
    }));
  };

  return (
    <AuthContext.Provider value={{ user, loading, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}
