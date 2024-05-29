export interface GoProps {
    href: string;
    children: React.ReactNode;
    target: string;
};

export default function Go({ href, children, target }: GoProps) {
    return (
        <>
            <span className="cursor-pointer" onClick={() => window.open(href, target)}>
                {children}
            </span>
        </>
    );
};