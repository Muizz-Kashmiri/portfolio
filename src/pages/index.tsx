import { type ReactElement } from 'react';

import { Layout } from '@/components/layout';
import { MyTimeline } from '@/ui/my-timeline';
import { ProfileBanner } from '@/ui/profile-banner';
import { TechIUse } from '@/ui/tech-i-use';
import { ThingsIveBuilt } from '@/ui/things-ive-built';

const Home = () => {
  return (
    <>
      <ProfileBanner />
      <MyTimeline />
      <ThingsIveBuilt />
      <TechIUse />
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
