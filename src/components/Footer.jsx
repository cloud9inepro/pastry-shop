

export const Footer = () =>{
    return(
        <footer className="bg-[#faf0e5] py-6">
            <div className="container mx-auto text-center">
                <p className="text-[#3d2b1f] text-sm">
                    &copy; {new Date().getFullYear()} Pastry Shop. All rights reserved.
                </p>
            </div>
        </footer>
    )
}