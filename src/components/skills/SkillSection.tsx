import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { AnimatePresence, motion } from 'framer-motion'
import { skillsData, SkillsCategory } from './skillsData'

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const SkillCard = ({ name, logo }: { name: string; logo: string }) => (
  <motion.div
    layout
    initial='hidden'
    animate='visible'
    exit='exit'
    variants={fadeVariants}
    transition={{ duration: 0.3 }}
  >
    <Box
      sx={{
        p: 3,
        textAlign: 'center',
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
        },
        height: '100%', // Ensure consistent height
      }}
    >
      <Box
        component='img'
        src={logo}
        alt={name}
        sx={{ width: 40, height: 40, mb: 1, objectFit: 'contain' }}
      />
      <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>
        {name}
      </Typography>
    </Box>
  </motion.div>
)

const SkillsSection: React.FC = () => {
  const [tab, setTab] = useState<SkillsCategory>('Frontend')

  const handleChange = (_: React.SyntheticEvent, newValue: SkillsCategory) => {
    setTab(newValue)
  }

  return (
    <Box sx={{ mb: 12 }}>
      <Typography
        variant='h3'
        sx={{
          fontWeight: 700,
          mb: 4,
          textAlign: 'center',
          color: '#1a2e19',
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -12,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #1a2e19, #1e4a1b)',
            borderRadius: '2px',
          },
        }}
      >
        My Skills
      </Typography>

      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        indicatorColor='primary'
        textColor='primary'
        sx={{ mb: 4 }}
      >
        {Object.keys(skillsData).map((category) => (
          <Tab
            key={category}
            value={category as SkillsCategory}
            label={category}
          />
        ))}
      </Tabs>

      <AnimatePresence mode='wait'>
        <motion.div
          key={tab}
          variants={fadeVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
              padding: 1,
            }}
          >
            {skillsData[tab].map(({ name, logo }) => (
              <div key={name}>
                <SkillCard name={name} logo={logo} />
              </div>
            ))}
          </Box>
        </motion.div>
      </AnimatePresence>

      <Divider sx={{ my: 8 }} />
    </Box>
  )
}

export default SkillsSection
