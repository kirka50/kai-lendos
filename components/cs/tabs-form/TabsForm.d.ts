interface TabsFormProps {
    tabsFormContent: Tab[];
}

interface Tab {
    title: string;
    subTitle: string;
    isSelected: boolean;
    tabContent: TabContent;
}

interface TabContent {
    tabContentTitle: string;
    tabContentText: string;
}
export {TabsFormProps, TabContent, Tab}