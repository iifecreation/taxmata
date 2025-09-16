"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Role, SignUpPayload, User } from "@/types";

interface AuthContextShape {
  user: User | null;
  loading: boolean;
  signup: (payload: SignUpPayload) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

const STORAGE_KEY = "taxmata_auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as User;
        setUser(parsed);
      } catch {
        console.error("Invalid user data in localStorage");
      }
    }
    setLoading(false);
  }, []);

  const signup = async (payload: SignUpPayload) => {
    const newUser: User = {
      id: crypto.randomUUID(),
      name: payload.name,
      email: payload.email,
      role: payload.role,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
    router.push("/dashboard"); // ✅ redirect after signup
  };

  const login = async (email: string, _password: string) => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const existing = JSON.parse(raw) as User;
      if (existing.email === email) {
        setUser(existing);
        router.push("/dashboard"); // ✅ redirect after login
        return;
      }
    }
    const newUser: User = {
      id: crypto.randomUUID(),
      name: email.split("@")[0] ?? "User",
      email,
      role: "individual",
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    setUser(newUser);
    router.push("/dashboard");
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    router.push("/login"); // ✅ redirect after logout
  };

  const value = useMemo(
    () => ({ user, loading, signup, login, logout }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

export function useRequireAuth() {
  const { user, loading } = useAuth();
  return { user, loading, isAuthenticated: !!user };
}

export function useUserRole(): Role | null {
  const { user } = useAuth();
  return user?.role ?? null;
}
