"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

// Определяем интерфейс для данных профиля
interface UserProfile {
  id: number;
  telegramId: string;
  username?: string | null;
  firstName: string;
  lastName?: string | null;
  photoUrl?: string | null;
  createdAt: string;
  updatedAt: string;
}

// Определяем минимальный интерфейс для Telegram WebApp, используемый здесь
interface MinimalTelegramWebApp {
  ready: () => void;
  initDataUnsafe?: {
    user?: {
      id: number;
      is_bot?: boolean;
      first_name: string;
      last_name?: string;
      username?: string;
      language_code?: string;
      is_premium?: boolean;
      added_to_attachment_menu?: boolean;
    };
    // Добавьте другие поля из initDataUnsafe, если они понадобятся
  };
  // Добавьте другие методы/свойства WebApp, если они понадобятся
}

export default function Profile() {
  const [telegramId, setTelegramId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<UserProfile | null>(null); // Используем UserProfile или null

  useEffect(() => {
    // Проверяем, что код выполняется в браузере и объект Telegram WebApp доступен
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      const webApp = window.Telegram.WebApp as unknown as MinimalTelegramWebApp; // Используем утверждение типа через unknown
      webApp.ready(); // Уведомляем Telegram о готовности WebApp

      // Используем initDataUnsafe для получения данных пользователя
      const user = webApp.initDataUnsafe?.user;

      if (user?.id) {
        setTelegramId(user.id.toString()); // Telegram ID всегда числовой, преобразуем в строку
        setIsLoading(false);
      } else {
        setError("Telegram user ID not found in initDataUnsafe.");
        setIsLoading(false);
        console.warn("Telegram user data not found in initDataUnsafe.");
      }
    } else {
      // Если код не выполняется в браузере или объект Telegram WebApp недоступен
      setError(
        "Telegram WebApp object not found or not in browser environment."
      );
      setIsLoading(false);
      console.warn("Telegram WebApp object not found.");
    }
  }, []); // Этот эффект выполняется один раз при монтировании компонента на клиенте

  useEffect(() => {
    const fetchUserProfile = async (id: string) => {
      setIsLoading(true);
      setError(null);
      try {
        console.log("Fetching profile for telegramId:", id);
        const response = await axios.post<UserProfile>( // Указываем тип ответа
          "http://localhost:4000/auth/get-profile",
          {
            telegramId: id,
          }
        );
        console.log("Profile data:", response.data);
        setProfileData(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        // Проверяем, является ли ошибка ошибкой Axios с ответом
        if (axios.isAxiosError(err) && err.response) {
          setError(
            `Failed to fetch profile: ${err.response.status} ${err.response.statusText}`
          );
        } else if (err instanceof Error) {
          setError(`Failed to fetch profile: ${err.message}`);
        } else {
          setError("Failed to fetch profile: An unknown error occurred.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Вызываем fetchUserProfile только если telegramId получен и не является null
    if (telegramId !== null) {
      fetchUserProfile(telegramId);
    }
  }, [telegramId]); // Этот эффект выполняется при изменении telegramId

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (telegramId === null) {
    return <div>Telegram user ID not available.</div>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {profileData ? (
        <div>
          <p>Telegram ID: {telegramId}</p>
          {/* Используем опциональную цепочку (?) при доступе к свойствам profileData */}
          {profileData?.username && <p>Username: {profileData.username}</p>}
          {profileData?.firstName && <p>First Name: {profileData.firstName}</p>}
          {profileData?.lastName && <p>Last Name: {profileData.lastName}</p>}
          {/* Отображаем остальные данные профиля в виде JSON для отладки */}
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
}
