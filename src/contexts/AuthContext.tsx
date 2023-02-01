import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from '../services/auth-service';

export interface User {
	_id: string;
	first_name: string;
	last_name: string;
	email: string;
	role: string;
	accountLocked: boolean;
}

type AuthProviderProps = { children: React.ReactNode };

const AuthContext = createContext<{} | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined)
		throw new Error('useAuth must be used within an AuthProvider');
	return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
	return (
		<AuthContext.Provider value={undefined}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
