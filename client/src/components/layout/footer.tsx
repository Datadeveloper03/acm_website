import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8">
        <div className="flex justify-center gap-8 mb-8">
          <img 
            src="/logo-new-removebg-preview.png" 
            alt="College Logo" 
            className="h-16 w-auto"
          />
          <img 
            src="/1740374618779-removebg-preview.png" 
            alt="ACM-W Logo" 
            className="h-14 w-auto"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-4">About ACM-W</h3>
            <p className="text-sm text-muted-foreground">
              Supporting, celebrating, and advocating for women in computing at St. Joseph's Institute of Technology.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://women.acm.org/" className="hover:text-primary">ACM-W Global</a></li>
              <li><a href="#" className="hover:text-primary">Join Our Chapter</a></li>
              <li><a href="#" className="hover:text-primary">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <BsTwitterX className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} St. Joseph's Institute of Technology ACM-W Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}