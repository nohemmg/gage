import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Stack, Text, Stepper, Step, StepIndicator, StepStatus, StepIcon, StepSeparator, Box } from '@chakra-ui/react';

const steps = [
  { title: 'First', description: 'Launch', threshold: 0 },
  { title: 'Second', description: '500k FDV', threshold: 500000 },
  { title: 'Third', description: '1M FDV', threshold: 1000000 },
  { title: 'Fourth', description: '5M FDV', threshold: 5000000 },
  { title: 'Fifth', description: '10M FDV', threshold: 10000000 },
];

export default function StepperComponent() {
  const [fdv, setFdv] = useState<number>(0);

  useEffect(() => {
    const fetchFdv = async () => {
      try {
        const response = await axios.get("https://api.dexscreener.com/latest/dex/tokens/0x698DC45e4F10966f6D1D98e3bFd7071d8144C233");
        const fetchedFdv = parseFloat(response.data.pairs[0].fdv);
        console.log('Fetched FDV:', fetchedFdv); // Debugging output
        setFdv(fetchedFdv);
      } catch (error) {
        console.error(`Failed to fetch data: ${error}`);
        setFdv(0);
      }
    };

    const intervalId = setInterval(fetchFdv, 1000); // Fetch data every second
    return () => clearInterval(intervalId);
  }, []);

  const getCurrentStep = (fdv: number) => {
    let currentStep = 0;
    for (let i = 0; i < steps.length; i++) {
      if (fdv >= steps[i].threshold) {
        currentStep = i;
      } else {
        break;
      }
    }
    return currentStep;
  };

  const getFractionalStepIndex = (fdv: number) => {
    const currentStep = getCurrentStep(fdv);
    const nextStep = currentStep + 1 < steps.length ? steps[currentStep + 1].threshold : fdv;
    const previousStep = steps[currentStep].threshold;
    const fractionalIndex = currentStep + (fdv - previousStep) / (nextStep - previousStep);
    return Math.min(fractionalIndex, steps.length - 1);
  };

  const activeStep = getFractionalStepIndex(fdv);
  const activeStepIndex = Math.floor(activeStep);
  const activeStepText = steps[activeStepIndex].description;

  return (
    <Stack>
      <Stepper size='sm' index={activeStepIndex} gap='0' colorScheme='red'>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus complete={activeStep > index ? <StepIcon /> : null} />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box position="relative">
        <Box
          position="absolute"
          left={`${((activeStep - activeStepIndex) / steps.length) * 100}%`}
          width="2px"
          height="100%"
          backgroundColor="red.500"
        />
      </Box>
      <Text color="white">
        Step {activeStepIndex + 1}: <b>{activeStepText}</b>
      </Text>
      <Text color="white">
        Current FDV: <b>{fdv.toLocaleString()}</b>
      </Text>
    </Stack>
  );
}
