export default function SectionHeaders({preHeader, mainHeader}) {
    return (
        <>
            <h3 className="uppercase text-gray-600 font-semibold">{preHeader}</h3>
            <h2 className="text-primary font-bold text-4xl leading-5">{mainHeader}</h2>
        </>
    )
}