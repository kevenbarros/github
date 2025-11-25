import type { ReactNode } from "react";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
  icon?: ReactNode;
  content: ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  currentTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const Tabs = ({
  tabs,
  currentTab,
  onTabChange,
  className = "",
}: TabsProps) => {
  const activeTab = tabs.find((tab) => tab.id === currentTab) || tabs[0];

  return (
    <div className={`w-full ${className}`}>
      <nav className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
                relative flex-1 text-base lg:flex-none md:text-lg overflow-hidden py-2 px-4 text-center font-medium hover:text-gray-700 whitespace-nowrap
                ${
                  tab.id === currentTab
                    ? "border-orange-500 text-black  border-b-2"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } 
              `}
          >
            <div className="flex items-center justify-center gap-2">
              {tab.icon && <span className="shrink-0">{tab.icon}</span>}

              <span className="truncate">{tab.label}</span>

              {tab.count !== undefined && (
                <span
                  className={`
                    inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${
                      tab.id === currentTab
                        ? "bg-orange-100 text-orange-800"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}
                >
                  {tab.count}
                </span>
              )}
            </div>
          </button>
        ))}
      </nav>

      <div className="bg-white">{activeTab?.content}</div>
    </div>
  );
};
