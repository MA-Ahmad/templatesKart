import * as React from 'react';
import {
  Container,
  Flex,
  Stack,
  VStack,
  Icon,
  Divider,
  useColorModeValue,
  Avatar,
  Text
} from '@chakra-ui/react';
import { GoPrimitiveDot } from 'react-icons/go';

interface Notification {
  notification: string;
  dateTime: string;
  userAvatar: string;
  isOnline: boolean;
}

const notifications: Notification[] = [
  {
    notification: `It's <span style="font-weight: 600">Mallory Hulme's</span> birthday. Wish him well!`,
    dateTime: '2 days ago',
    userAvatar: 'https://bit.ly/dan-abramov',
    isOnline: true
  },
  {
    notification: `<span style="font-weight: 600">Maryjo Lebarree</span> liked your photo.`,
    dateTime: 'yesterday',
    userAvatar: 'https://bit.ly/dan-abramov',
    isOnline: true
  },
  {
    notification: `<span style="font-weight: 600">Egan Poetz</span> registered new client as <span style="font-weight: 600">Trilia</span>.`,
    dateTime: '4 days ago',
    userAvatar: 'https://bit.ly/dan-abramov',
    isOnline: false
  }
];

const NotificationsList = () => {
  return (
    <Container maxW="5xl" py={10} px={10}>
      <VStack
        boxShadow={useColorModeValue(
          '2px 6px 8px rgba(160, 174, 192, 0.6)',
          '2px 6px 8px rgba(9, 17, 28, 0.9)'
        )}
        bg={useColorModeValue('gray.100', 'gray.800')}
        rounded="md"
        overflow="hidden"
        spacing={0}
      >
        {notifications.map((notification, index) => (
          <>
            <Flex w="100%" justify="space-between" alignItems="center">
              <Stack spacing={0} direction="row" alignItems="center">
                <Flex p={4}>
                  <Avatar size="md" name="Dan Abrahmov" src={notification.userAvatar} />
                </Flex>
                <Flex direction="column" p={2}>
                  <Text
                    color={useColorModeValue('black', 'white')}
                    fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
                    dangerouslySetInnerHTML={{ __html: notification.notification }}
                  />
                  <Text
                    color={useColorModeValue('gray.400', 'gray.200')}
                    fontSize={{ base: 'sm', sm: 'md' }}
                  >
                    {notification.dateTime}
                  </Text>
                </Flex>
              </Stack>
              {notification.isOnline && (
                <Flex p={4}>
                  <Icon as={GoPrimitiveDot} w={5} h={5} color="blue.400" />
                </Flex>
              )}
            </Flex>
            {notifications.length - 1 !== index && <Divider m={0} />}
          </>
        ))}
      </VStack>
    </Container>
  );
};

export default NotificationsList;
