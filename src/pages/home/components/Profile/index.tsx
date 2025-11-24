import { useProfileStore } from "@/stores/profileStore";
import { MapPin, Link, Building2, Twitter } from "lucide-react";

export const Profile = () => {
  const { userInfo } = useProfileStore();
  return (
    <div className="w-full col-span-1 max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex flex-col items-center md:items-center gap-6">
        <img
          src={userInfo?.avatar_url}
          alt={userInfo?.name || "User Avatar"}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-200"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-center flex-col gap-4 mb-4">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              {userInfo?.name}
            </h1>
          </div>

          {userInfo?.bio && (
            <p className="text-gray-600 mb-4">{userInfo?.bio}</p>
          )}

          <div className="flex flex-col flex-wrap items-start gap-4 text-sm text-gray-600">
            {userInfo?.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{userInfo.location}</span>
              </div>
            )}

            {userInfo?.blog && (
              <div className="flex items-center gap-1">
                <Link className="w-4 h-4" />
                <a
                  href={`http://${userInfo?.blog}`}
                  className="text-blue-600 hover:underline"
                >
                  {userInfo?.blog}
                </a>
              </div>
            )}

            {userInfo?.company && (
              <div className="flex items-center gap-1">
                <Building2 className="w-4 h-4" />
                <span>{userInfo?.company}</span>
              </div>
            )}

            {userInfo?.twitter_username && (
              <div className="flex items-center gap-1">
                <Twitter className="w-4 h-4" />
                <a
                  href={`https://twitter.com/${userInfo?.twitter_username}`}
                  className="text-blue-600 hover:underline"
                >
                  @{userInfo?.twitter_username}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
