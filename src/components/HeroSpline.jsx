import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <section className="relative w-full h-[56vh] sm:h-[62vh] bg-orange-400">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/rwKT-aWtlkdY-8UV/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-200/30 to-orange-100/90 pointer-events-none" />
    </section>
  );
}
