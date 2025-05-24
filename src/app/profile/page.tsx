"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [telegramId, setTelegramId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<any>(null);

  useEffect(() => {
    // Проверяем, что код выполняется в браузере
    if (typeof window !== "undefined") {
      // Получаем query-параметры из текущего URL
      const params = new URLSearchParams(window.location.search);
      const idFromUrl = params.get("telegramId");

      if (idFromUrl) {
        setTelegramId(idFromUrl);
        // Переводим isLoading в false, так как telegramId получен
        setIsLoading(false);
      } else {
        // Если telegramId не найден в URL
        setError("Telegram ID not found in URL.");
        setIsLoading(false);
        console.warn("Telegram ID not found in URL query parameters.");
      }
    } else {
      // Если код не выполняется в браузере (например, на сервере)
      setError("This component should be rendered in a browser.");
      setIsLoading(false);
    }
  }, []); // Этот эффект выполняется один раз при монтировании компонента на клиенте

  useEffect(() => {
    const fetchUserProfile = async (id: string) => {
      setIsLoading(true); // Начинаем загрузку при получении telegramId
      setError(null); // Сбрасываем предыдущие ошибки
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
        setIsLoading(false); // Завершаем загрузку после попытки получения профиля
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
    // Это состояние будет достигнуто, если telegramId не был найден в URL
    return <div>Telegram user ID not available from URL.</div>;
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
