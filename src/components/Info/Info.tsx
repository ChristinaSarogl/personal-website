import ExternalLink from "../icons/ExternalLink";
import Mail from "../icons/Mail";
import Location from "../icons/Location";

import './info.css';
import File from "../icons/File";

export default function Info() {
  return (
    <div className='grid grid-cols-3 gap-16'>

      <div className='col-span-3 lg:col-span-2'>
        <div className='info-container'>

          <div className='info-title-container'>
            <p className='info-subtitle'>
              <span className='text-color'>About Me</span>
              <span>Roles · Responsibilities · Growth</span>
            </p>

            <h2 className='info-title space-grotesk'>
              [The face behind <span className='text-color'>the work.</span>]
            </h2>
          </div>

          <p className='info-content'>
            Hey! I'm Christina, a software engineer driven by curiosity, creativity, and the satisfaction of solving problems that initially
            seem a little intimidating.
            <br /><br />
            I've worked on everything, from enterprise websites and full-stack platforms to AI research, and somewhere along the way, I discovered
            that I genuinely enjoy being thrown into something new. I'm naturally curious, adaptable, and always up for learning something new.
            I enjoy collaborating with people, sharing what I know, and tackling problems that don't come with an instruction manual
            (although good documentation is always appreciated).
            <br /><br />
            Outside of job titles and tech stacks, I'm simply someone who likes a good challenge, believes there's always room to improve, and
            gets a little too excited when everything finally works as intended.
          </p>

          <div className='info-cta'>
            <div className='info-details'>
              <p>
                <Location />
                <span>Limassol, Cyprus</span>
              </p>
              <p>
                <Mail />
                <span>xristsar@gmail.com</span>
              </p>
            </div>

            <div className='info-links'>
              <a href="/documents/Christina_Saroglaki_CV.pdf" className={'text icon ghost small relative'} target="_blank" 
                download="Christina_Saroglaki_CV.pdf">
                <File /> Resume
              </a>
              <a href="https://github.com/ChristinaSarogl" className={'text icon ghost small relative'} target="_blank">
                GitHub <ExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        image
      </div>
    </div>
  );
}