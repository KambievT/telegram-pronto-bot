"use client";
import React, { useEffect, useState } from "react";

interface ProfileData {
  username?: string;
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
}

export default function Profile() {
  const telegramId = localStorage.getItem("telegramId");
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://tg-pronto-backend-production.up.railway.app/auth/get-profile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ telegramId }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, [telegramId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-11 w-11 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gray-700 h-32"></div>

          <div className="relative px-8 py-6">
            <div className="absolute -top-16 left-8">
              {profileData?.photoUrl ? (
                <img
                  src={profileData.photoUrl}
                  alt="Profile"
                  className="h-32 w-32 rounded-full border-4 border-white shadow-lg"
                />
              ) : (
                <div className="h-32 w-32 rounded-full border-4 border-white shadow-lg bg-gray-600 flex items-center justify-center">
                  <span className="text-4xl text-gray-400">👤</span>
                </div>
              )}
            </div>

            <div className="mt-16">
              <h1 className="text-3xl font-bold text-gray-900">
                {profileData?.firstName} {profileData?.lastName}
              </h1>
              <p className="text-gray-600 mt-1">@{profileData?.username}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">
                  Telegram ID
                </h3>
                <p className="mt-1 text-lg text-gray-900">{telegramId}</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500">Username</h3>
                <p className="mt-1 text-lg text-gray-900">
                  @{profileData?.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
