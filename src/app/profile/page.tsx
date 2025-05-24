"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [telegramId, setTelegramId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    // Проверяем, что код выполняется в браузере и объект Telegram WebApp доступен
    if (
      typeof window !== "undefined" &&
      window.Telegram &&
      window.Telegram.WebApp
    ) {
      const webApp = window.Telegram.WebApp as any; // Используем утверждение типа
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
        const response = await axios.post(
          "http://localhost:4000/auth/get-profile",
          {
            telegramId: id,
          }
        );
        console.log("Profile data:", response.data);
        setProfileData(response.data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to fetch profile.");
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
          {profileData.username && <p>Username: {profileData.username}</p>}
          {profileData.firstName && <p>First Name: {profileData.firstName}</p>}
          {profileData.lastName && <p>Last Name: {profileData.lastName}</p>}
          <pre>{JSON.stringify(profileData, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
    </div>
  );
}
