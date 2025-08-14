import React, { useRef, useState } from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

interface ApproachStep {
  id: number;
  title: string;
  paragraphs: string[];
}

const ScrollDrivenApproach: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  // Scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create smooth spring animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress into different animation values
  const circleRotation = useTransform(smoothProgress, [0, 1], [0, 360]);
  const backgroundScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const approachSteps: ApproachStep[] = [
    {
      id: 1,
      title: "Consultation",
      paragraphs: [
        "We begin by engaging with clients to thoroughly understand their business objectives, challenges, and specific requirements.",
        "This collaborative dialogue ensures that our solutions are precisely aligned with their strategic goals."
      ]
    },
    {
      id: 2,
      title: "Customization", 
      paragraphs: [
        "Leveraging our expertise in Dynamics 365, we tailor solutions to meet the unique demands of each client.",
        "This involves configuring and extending the platform to optimize processes and enhance operational efficiency."
      ]
    },
    {
      id: 3,
      title: "Implementation",
      paragraphs: [
        "Our team executes the deployment of the customized Dynamics 365 solutions, ensuring seamless integration with existing systems and minimal disruption to business operations.",
        "We adhere to best practices to deliver high-quality outcomes."
      ]
    },
    {
      id: 4,
      title: "Support and Optimization",
      paragraphs: [
        "Post-implementation, we provide ongoing support to address any issues and offer continuous optimization services.",
        "This ensures that the solutions evolve in tandem with the client's business growth and changing needs."
      ]
    }
  ];

  // Create individual scroll triggers for each step
  const stepProgress = approachSteps.map((_, index) => {
    const start = index * 0.25;
    const end = (index + 1) * 0.25;
    return useTransform(smoothProgress, [start, end], [0, 1]);
  });

  // Orbital positions for numbered circles
  const getOrbitalPosition = (index: number, progress: number) => {
    const baseAngle = (index * 90) - 45; // 45, 135, 225, 315 degrees
    const animatedAngle = baseAngle + (progress * 360);
    const radius = 180;
    const x = Math.cos((animatedAngle * Math.PI) / 180) * radius;
    const y = Math.sin((animatedAngle * Math.PI) / 180) * radius;
    return { x, y };
  };

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '400vh', // Extended height for scroll-driven animation
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ff6b35 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background pattern */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
            linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%)
          `,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          scale: backgroundScale,
          opacity: 0.3,
        }}
      />

      {/* Sticky container for the main content */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            style={{
              opacity: contentOpacity,
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 8,
                alignItems: 'center',
                minHeight: '80vh',
              }}
            >
              {/* Left side - Animated circular diagram */}
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Main rotating circle */}
                <motion.div
                  style={{
                    rotate: circleRotation,
                  }}
                >
                  <Box
                    sx={{
                      width: '300px',
                      height: '300px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.9) 0%, rgba(101, 67, 33, 0.95) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                      border: '8px solid rgba(255, 255, 255, 0.2)',
                    }}
                  >
                    {/* Inner circle with text */}
                    <Box
                      sx={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'rgba(139, 69, 19, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          color: 'white',
                          fontWeight: 700,
                          textAlign: 'center',
                          lineHeight: 1.2,
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        TechCorp's
                        <br />
                        Approach
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>

                {/* Orbiting step circles */}
                {approachSteps.map((step, index) => {
                  const stepProg = stepProgress[index];
                  const position = getOrbitalPosition(index, 0); // Static positions
                  
                  return (
                    <motion.div
                      key={step.id}
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${position.x}px)`,
                        top: `calc(50% + ${position.y}px)`,
                        transform: 'translate(-50%, -50%)',
                        scale: useTransform(stepProg, [0, 0.5, 1], [0.5, 1.2, 1]),
                        opacity: useTransform(stepProg, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]),
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        style={{
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          background: useTransform(
                            stepProg,
                            [0, 1],
                            [
                              'rgba(255, 255, 255, 0.8)',
                              'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)'
                            ]
                          ),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                          border: '3px solid rgba(255, 255, 255, 0.4)',
                          cursor: 'pointer',
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            textShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          {step.id}
                        </Typography>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </Box>

              {/* Right side - Step content cards */}
              <Box sx={{ position: 'relative', height: '600px' }}>
                {approachSteps.map((step, index) => {
                  const stepProg = stepProgress[index];
                  
                  return (
                    <motion.div
                      key={step.id}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        opacity: useTransform(stepProg, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
                        y: useTransform(stepProg, [0, 0.2, 0.8, 1], [100, 0, 0, -100]),
                        scale: useTransform(stepProg, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]),
                      }}
                    >
                      <Card
                        sx={{
                          p: 4,
                          background: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(20px)',
                          borderRadius: 4,
                          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          borderLeft: '6px solid #ff6b35',
                          minHeight: '300px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                          <Box
                            sx={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontSize: '1.2rem',
                              fontWeight: 700,
                              boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
                            }}
                          >
                            {step.id}
                          </Box>
                          <Typography
                            variant="h4"
                            sx={{
                              fontWeight: 600,
                              color: '#ff6b35',
                              fontSize: { xs: '1.5rem', md: '2rem' },
                            }}
                          >
                            {step.title}
                          </Typography>
                        </Box>
                        
                        {step.paragraphs.map((paragraph, pIndex) => (
                          <motion.div
                            key={pIndex}
                            style={{
                              opacity: useTransform(
                                stepProg,
                                [0, 0.3 + (pIndex * 0.1), 0.7, 1],
                                [0, 1, 1, 0]
                              ),
                              y: useTransform(
                                stepProg,
                                [0, 0.3 + (pIndex * 0.1), 0.7, 1],
                                [30, 0, 0, -30]
                              ),
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{
                                mb: pIndex < step.paragraphs.length - 1 ? 2 : 0,
                                lineHeight: 1.7,
                                fontSize: '1.1rem',
                                color: 'rgba(0, 0, 0, 0.8)',
                              }}
                            >
                              {paragraph}
                            </Typography>
                          </motion.div>
                        ))}
                      </Card>
                    </motion.div>
                  );
                })}
              </Box>
            </Box>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default ScrollDrivenApproach;