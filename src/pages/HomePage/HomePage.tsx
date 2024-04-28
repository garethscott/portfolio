import LandingSectionWrapper from '../../components/LandingSection/LandingSectionWrapper/LandingSectionWrapper';
import { HomePageWrapper, BackgroundImage } from './HomePage.styles';

function HomePage() {
    return (
        <HomePageWrapper>
          <BackgroundImage>
            <LandingSectionWrapper />
          </BackgroundImage>
        </HomePageWrapper>
    );
}

export default HomePage;