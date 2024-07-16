-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2024-07-16 15:19:21
-- 服务器版本： 8.0.38
-- PHP 版本： 8.2.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `jokerstuff`
--

-- --------------------------------------------------------

--
-- 表的结构 `typecho_comments`
--

CREATE TABLE `typecho_comments` (
  `coid` int UNSIGNED NOT NULL,
  `cid` int UNSIGNED DEFAULT '0',
  `created` int UNSIGNED DEFAULT '0',
  `author` varchar(150) DEFAULT NULL,
  `authorId` int UNSIGNED DEFAULT '0',
  `ownerId` int UNSIGNED DEFAULT '0',
  `mail` varchar(150) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `ip` varchar(64) DEFAULT NULL,
  `agent` varchar(511) DEFAULT NULL,
  `text` text,
  `type` varchar(16) DEFAULT 'comment',
  `status` varchar(16) DEFAULT 'approved',
  `parent` int UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_comments`
--

INSERT INTO `typecho_comments` (`coid`, `cid`, `created`, `author`, `authorId`, `ownerId`, `mail`, `url`, `ip`, `agent`, `text`, `type`, `status`, `parent`) VALUES
(1, 1, 1718015176, 'Typecho', 0, 1, NULL, 'https://typecho.org', '127.0.0.1', 'Typecho 1.2.1', '欢迎加入 Typecho 大家族', 'comment', 'approved', 0),
(2, 2, 1718023009, '苍穹呀', 0, 1, '1245715843@qq.com', 'https://cangqiong01.githun.io/', '58.241.6.130', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0', '乐', 'comment', 'approved', 0),
(3, 4, 1718024335, 'FrozenArcher', 0, 1, 'me@fracher21.top', 'http://127.0.0.1:9090', '103.235.16.59', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0', '过于炸裂，过于乐子', 'comment', 'approved', 0),
(6, 4, 1718202399, 'swim', 0, 1, 'g853279614@gmail.com', NULL, '103.151.172.30', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36 EdgA/125.0.0.0', '路人 乐死我了', 'comment', 'approved', 0),
(8, 4, 1718202445, 'X-LeeHe', 0, 1, 'a2956962139@outlook.com', NULL, '2409:893d:680a:e0::1', 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36 EdgA/124.0.0.0', '乐死我了（', 'comment', 'approved', 0),
(11, 4, 1718461108, 'hll_RGB', 0, 1, 'hll_RGB@owoxwx.com', NULL, '2409:8a20:b253:b350:dbd:8d2c:526f:cdb9', 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0', '草我怎么也上了', 'comment', 'approved', 0);

-- --------------------------------------------------------

--
-- 表的结构 `typecho_contents`
--

CREATE TABLE `typecho_contents` (
  `cid` int UNSIGNED NOT NULL,
  `title` varchar(150) DEFAULT NULL,
  `slug` varchar(150) DEFAULT NULL,
  `created` int UNSIGNED DEFAULT '0',
  `modified` int UNSIGNED DEFAULT '0',
  `text` longtext,
  `order` int UNSIGNED DEFAULT '0',
  `authorId` int UNSIGNED DEFAULT '0',
  `template` varchar(32) DEFAULT NULL,
  `type` varchar(16) DEFAULT 'post',
  `status` varchar(16) DEFAULT 'publish',
  `password` varchar(32) DEFAULT NULL,
  `commentsNum` int UNSIGNED DEFAULT '0',
  `allowComment` char(1) DEFAULT '0',
  `allowPing` char(1) DEFAULT '0',
  `allowFeed` char(1) DEFAULT '0',
  `parent` int UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_contents`
--

INSERT INTO `typecho_contents` (`cid`, `title`, `slug`, `created`, `modified`, `text`, `order`, `authorId`, `template`, `type`, `status`, `password`, `commentsNum`, `allowComment`, `allowPing`, `allowFeed`, `parent`) VALUES
(1, '欢迎使用 Typecho', 'start', 1718015176, 1718015176, '<!--markdown-->如果您看到这篇文章,表示您的 blog 已经安装成功.', 0, 1, NULL, 'post', 'hidden', NULL, 1, '1', '1', '1', 0),
(2, '关于', 'start-page', 1718015160, 1718192239, '<!--markdown-->本页面由 Typecho 创建, 这只是个测试页面.', 0, 1, NULL, 'page', 'hidden', NULL, 1, '1', '1', '1', 0),
(3, 'prepre.jpg', 'prepre-jpg', 1718016880, 1718016880, 'a:5:{s:4:\"name\";s:10:\"prepre.jpg\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4079141468.jpg\";s:4:\"size\";i:78318;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 1, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(4, 'arch群最大乐子', '4', 1718018040, 1718624659, '<!--markdown-->![Untitled.png][1]\n\n~~热知识：本站为此乐子而生~~\n\n> 东南枝： 大佬教教我linux\n月光长老： 你懂linux吗？我八年运维！\n东南枝： linux是什么啊\n月光长老： linus是美国人，他现在为美国工作，美国是中国的敌人，所以linux是中国的敌人！他是美国人，他现在为美国工作，美国是中国的敌人，所以linux是中国的敌人！linus，现在国籍是美国的，他只是出生在芬兰！！！     --arch群群友改编经典语录\n\n\n> 给他一个linux八年运维，他可以搞出linux是中国的敌人；给他一个arch传教群，他可以闹两天群。他们就是带名鼎鼎的初一牲东南枝和月光长老。给他一个gentoo，他能编织出未来的篇章；有人质问为什么lsk不是大佬，他反问为什么是。美国五星上将麦克阿瑟这样评价到：“没有经历过群友的毒打。”面对东南枝的退群，arch群群友决定建斗兽场。大型纪录片《东南枝+月光长老传奇》持续为您播出     --Canadew\n\n# 东南枝篇\n## 加群前\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/4079141468.jpg\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/472818634.jpg\" width=\"300\"/>\n\n## 《大佬教我linux》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/932523532.jpg\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/3653120628.jpg\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/348918612.jpg\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/3853835091.png\" width=\"300\"/>\n\n## 《大佬你是左吗》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2579224300.png\" width=\"300\"/>\n\n## 《我要linux系统,纯粹的linux》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2343671125.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/115206885.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2367230116.png\" width=\"300\"/>\n\n## （可能）是初一牲\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/303404682.png\" width=\"300\"/>\n\n## 《ubuntu不是linux》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2723998001.png\" width=\"300\"/>\n\n## 没错，乐子用过gentoo\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/196118246.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/3820580766.png\" width=\"300\"/>\n\n## 第一次被踢，又回来了\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2855783661.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/261607953.png\" width=\"300\"/>\n\n## 安装arch\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/598648686.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/4049168782.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/825153205.png\" width=\"300\"/>\n### 评价\n```\n<Naro-Xeno> 我的评价是他自己先装一遍\n```\n\n## 《主系统装机械上，另一个不知名系统装ssd上》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/1443777482.png\" width=\"300\"/>\n\n## 入典部分\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/4264135774.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/277756700.png\" width=\"300\"/>\n\n## 《数学大蛇》\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/1768233564.png\" width=\"300\"/>\n\n## 退群前\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/4122562771.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/695220188.png\" width=\"300\"/>\n### 评价\n```\n<Cola Leo> 评价是：没有经历过群友的毒打\n<Canadew> 不做评价（\n```\n## 乐子退群\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/4042457963.png\" width=\"300\"/>\n\n## 后续\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/1162888288.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2860827549.png\" width=\"300\"/>\n### 评价\n```\n<Cola Leo> ？评价是初一的读过资本论吗）\n```\n# 月光长老篇\n\n> 我：我是学生，要睡觉\n月光长老：什么？你是畜生？\n不对，你连畜生都不如<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2268944734.png\" width=\"50\" height=50/>\n\n\n> 月光长老：我八年运维！\n你快告诉我你群里发的是什么\n我： [fbterm](https://aur.archlinux.org/packages/fbterm)+[yong](https://aur.archlinux.org/packages/yong)\n月光长老：详细点！\n## Part 1\n![2024-06-12T15:17:34.png][2]\n![2024-06-12T15:17:47.png][3]\n![2024-06-12T15:17:58.png][4]\n![2024-06-12T15:18:11.png][5]\n![2024-06-12T15:18:21.png][6]\n![2024-06-12T15:18:32.png][7]\n![2024-06-12T15:18:42.png][8]\n## 入典部分\n![2024-06-12T15:19:04.png][9]\n![2024-06-12T15:19:16.png][10]\n![2024-06-12T15:19:27.png][11]\n## Part 2\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/2461444432.png\" width=\"300\"/>\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/1203024232.png\" width=\"300\"/>\n## 真正的入典部分\n<img src=\"https://joker-stuff.itcdt.top/usr/uploads/2024/06/1581557162.jpg\" width=\"300\"/>\n\n  [1]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/571798872.png\n  [2]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1835538830.png\n  [3]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1869687149.png\n  [4]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/3706755018.png\n  [5]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1871139076.png\n  [6]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1820301657.png\n  [7]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/2089271145.png\n  [8]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/3445262420.png\n  [9]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1757035513.png\n  [10]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/3943898846.png\n  [11]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/2742514671.png', 0, 1, NULL, 'post', 'publish', NULL, 4, '1', '1', '1', 0),
(5, 'pre.jpg', 'pre-jpg', 1718016963, 1718016963, 'a:5:{s:4:\"name\";s:7:\"pre.jpg\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/472818634.jpg\";s:4:\"size\";i:44290;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 2, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(6, 'want_to_learn_linux.jpg', 'want_to_learn_linux-jpg', 1718017042, 1718017042, 'a:5:{s:4:\"name\";s:23:\"want_to_learn_linux.jpg\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/348918612.jpg\";s:4:\"size\";i:536398;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 3, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(7, 'want_to_learn_linux_2.png', 'want_to_learn_linux_2-png', 1718017053, 1718017053, 'a:5:{s:4:\"name\";s:25:\"want_to_learn_linux_2.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3853835091.png\";s:4:\"size\";i:562539;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 4, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(8, 'left.png', 'left-png', 1718017234, 1718017234, 'a:5:{s:4:\"name\";s:8:\"left.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2579224300.png\";s:4:\"size\";i:490922;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 5, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(9, 'linux_is_system.png', 'linux_is_system-png', 1718017314, 1718017314, 'a:5:{s:4:\"name\";s:19:\"linux_is_system.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/115206885.png\";s:4:\"size\";i:909891;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 6, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(10, 'linux_is_system2.png', 'linux_is_system2-png', 1718017323, 1718017323, 'a:5:{s:4:\"name\";s:20:\"linux_is_system2.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2367230116.png\";s:4:\"size\";i:402808;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 7, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(13, 'start1.jpg', 'start1-jpg', 1718017444, 1718017444, 'a:5:{s:4:\"name\";s:10:\"start1.jpg\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/932523532.jpg\";s:4:\"size\";i:123389;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 8, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(14, 'start2.jpg', 'start2-jpg', 1718017455, 1718017455, 'a:5:{s:4:\"name\";s:10:\"start2.jpg\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3653120628.jpg\";s:4:\"size\";i:558113;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 9, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(16, 'pure_linux.png', 'pure_linux-png', 1718017523, 1718017523, 'a:5:{s:4:\"name\";s:14:\"pure_linux.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2343671125.png\";s:4:\"size\";i:600290;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 10, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(17, 'junior_high_g1.png', 'junior_high_g1-png', 1718017637, 1718017637, 'a:5:{s:4:\"name\";s:18:\"junior_high_g1.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/303404682.png\";s:4:\"size\";i:911436;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 11, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(18, 'uuu_isnt_linux.png', 'uuu_isnt_linux-png', 1718017673, 1718017673, 'a:5:{s:4:\"name\";s:18:\"uuu_isnt_linux.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2723998001.png\";s:4:\"size\";i:525898;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 12, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(19, 'use_gentoo.png', 'use_gentoo-png', 1718017692, 1718017692, 'a:5:{s:4:\"name\";s:14:\"use_gentoo.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/196118246.png\";s:4:\"size\";i:398084;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 13, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(20, 'use_gentoo_2.png', 'use_gentoo_2-png', 1718017698, 1718017698, 'a:5:{s:4:\"name\";s:16:\"use_gentoo_2.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3820580766.png\";s:4:\"size\";i:986170;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 14, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(21, 'first_kick.png', 'first_kick-png', 1718017773, 1718017773, 'a:5:{s:4:\"name\";s:14:\"first_kick.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2855783661.png\";s:4:\"size\";i:782962;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 15, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(22, 'reborn.png', 'reborn-png', 1718017802, 1718017802, 'a:5:{s:4:\"name\";s:10:\"reborn.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/261607953.png\";s:4:\"size\";i:917114;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 16, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(23, 'install_linux_1.png', 'install_linux_1-png', 1718017832, 1718017832, 'a:5:{s:4:\"name\";s:19:\"install_linux_1.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/598648686.png\";s:4:\"size\";i:699579;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 17, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(24, 'install_arch_pt1.png', 'install_arch_pt1-png', 1718017848, 1718017848, 'a:5:{s:4:\"name\";s:20:\"install_arch_pt1.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4049168782.png\";s:4:\"size\";i:697983;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 18, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(25, 'installed_arch.png', 'installed_arch-png', 1718017878, 1718017878, 'a:5:{s:4:\"name\";s:18:\"installed_arch.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/825153205.png\";s:4:\"size\";i:493447;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 19, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(26, 'install_system_on_nonssd.png', 'install_system_on_nonssd-png', 1718017927, 1718017927, 'a:5:{s:4:\"name\";s:28:\"install_system_on_nonssd.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1443777482.png\";s:4:\"size\";i:703349;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 20, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(27, 'the_classical_part.png', 'the_classical_part-png', 1718017956, 1718017956, 'a:5:{s:4:\"name\";s:22:\"the_classical_part.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4264135774.png\";s:4:\"size\";i:2325489;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 21, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(28, 'the_classical_part_2.png', 'the_classical_part_2-png', 1718017965, 1718017965, 'a:5:{s:4:\"name\";s:24:\"the_classical_part_2.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/277756700.png\";s:4:\"size\";i:1431965;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 22, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(29, 'prefinal1.png', 'prefinal1-png', 1718017996, 1718017996, 'a:5:{s:4:\"name\";s:13:\"prefinal1.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4122562771.png\";s:4:\"size\";i:1151932;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 23, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(31, 'prefinal2.png', 'prefinal2-png', 1718018015, 1718018015, 'a:5:{s:4:\"name\";s:13:\"prefinal2.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/695220188.png\";s:4:\"size\";i:1410228;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 24, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(32, 'the_end.png', 'the_end-png', 1718018022, 1718018022, 'a:5:{s:4:\"name\";s:11:\"the_end.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4042457963.png\";s:4:\"size\";i:318805;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 25, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(33, 'after.png', 'after-png', 1718018045, 1718018045, 'a:5:{s:4:\"name\";s:9:\"after.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1162888288.png\";s:4:\"size\";i:374754;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 26, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(34, 'after2.png', 'after2-png', 1718018050, 1718018050, 'a:5:{s:4:\"name\";s:10:\"after2.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2860827549.png\";s:4:\"size\";i:406293;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 27, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(38, '2024-06-10T14:27:21.png', '2024-06-10T14-27-21-png', 1718029664, 1718029664, 'a:5:{s:4:\"name\";s:23:\"2024-06-10T14:27:21.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/4245419266.png\";s:4:\"size\";i:5777776;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 1, 2, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 39),
(39, '建议抓进去', '39', 1718029675, 1718029675, '<!--markdown-->![2024-06-10T14:27:21.png][1]\r\n\r\n\r\n  [1]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/4245419266.png', 0, 2, NULL, 'post', 'publish', NULL, 0, '1', '1', '1', 0),
(41, '2024-06-11T16:49:45.png', '2024-06-11T16-49-45-png', 1718124587, 1718124587, 'a:5:{s:4:\"name\";s:23:\"2024-06-11T16:49:45.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3425272225.png\";s:4:\"size\";i:384011;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 1, 2, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 42),
(42, '文本编辑器，但是 Visual Studio', '42', 1718124643, 1718124643, '<!--markdown-->![2024-06-11T16:49:45.png][1]\r\n\r\n  [1]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/3425272225.png', 0, 2, NULL, 'post', 'publish', NULL, 0, '1', '1', '1', 0),
(43, '2024-06-12T13:03:45.png', '2024-06-12T13-03-45-png', 1718197428, 1718197428, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T13:03:45.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3043927725.png\";s:4:\"size\";i:122956;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 1, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 44),
(44, '《集成显卡没有显存》', '44', 1718197380, 1718286587, '<!--markdown-->![2024-06-12T13:03:45.png][1]\r\n\r\n\r\n  [1]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/3043927725.png', 0, 1, NULL, 'post', 'publish', NULL, 0, '1', '1', '1', 0),
(45, 'mathematics_master.png', 'mathematics_master-png', 1718203801, 1718203801, 'a:5:{s:4:\"name\";s:22:\"mathematics_master.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1768233564.png\";s:4:\"size\";i:931014;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 28, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(50, '2024-06-12T15:07:22.png', '2024-06-12T15-07-22-png', 1718204844, 1718204844, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:07:22.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2268944734.png\";s:4:\"size\";i:18903;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 29, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(53, '2024-06-12T15:17:34.png', '2024-06-12T15-17-34-png', 1718205457, 1718205457, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:17:34.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1835538830.png\";s:4:\"size\";i:114421;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 30, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(54, '2024-06-12T15:17:47.png', '2024-06-12T15-17-47-png', 1718205469, 1718205469, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:17:47.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1869687149.png\";s:4:\"size\";i:232374;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 31, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(55, '2024-06-12T15:17:58.png', '2024-06-12T15-17-58-png', 1718205480, 1718205480, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:17:58.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3706755018.png\";s:4:\"size\";i:148791;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 32, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(56, '2024-06-12T15:18:11.png', '2024-06-12T15-18-11-png', 1718205493, 1718205493, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:18:11.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1871139076.png\";s:4:\"size\";i:180952;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 33, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(57, '2024-06-12T15:18:21.png', '2024-06-12T15-18-21-png', 1718205504, 1718205504, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:18:21.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1820301657.png\";s:4:\"size\";i:151078;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 34, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(58, '2024-06-12T15:18:32.png', '2024-06-12T15-18-32-png', 1718205514, 1718205514, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:18:32.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2089271145.png\";s:4:\"size\";i:118640;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 35, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(59, '2024-06-12T15:18:42.png', '2024-06-12T15-18-42-png', 1718205524, 1718205524, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:18:42.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3445262420.png\";s:4:\"size\";i:129055;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 36, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(60, '2024-06-12T15:19:04.png', '2024-06-12T15-19-04-png', 1718205547, 1718205547, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:19:04.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1757035513.png\";s:4:\"size\";i:144871;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 37, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(61, '2024-06-12T15:19:16.png', '2024-06-12T15-19-16-png', 1718205559, 1718205559, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:19:16.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/3943898846.png\";s:4:\"size\";i:172982;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 38, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(62, '2024-06-12T15:19:27.png', '2024-06-12T15-19-27-png', 1718205569, 1718205569, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:19:27.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2742514671.png\";s:4:\"size\";i:129329;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 39, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(63, '2024-06-12T15:20:14.png', '2024-06-12T15-20-14-png', 1718205620, 1718205620, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:20:14.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1203024232.png\";s:4:\"size\";i:4038442;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 40, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(64, '2024-06-12T15:20:30.png', '2024-06-12T15-20-30-png', 1718205635, 1718205635, 'a:5:{s:4:\"name\";s:23:\"2024-06-12T15:20:30.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/2461444432.png\";s:4:\"size\";i:3601663;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 41, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(65, 'Untitled.png', 'Untitled-png', 1718207198, 1718207198, 'a:5:{s:4:\"name\";s:12:\"Untitled.png\";s:4:\"path\";s:34:\"/usr/uploads/2024/06/571798872.png\";s:4:\"size\";i:236663;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 42, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4),
(67, '2024-06-13T13:46:39.png', '2024-06-13T13-46-39-png', 1718286402, 1718286402, 'a:5:{s:4:\"name\";s:23:\"2024-06-13T13:46:39.png\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1739696502.png\";s:4:\"size\";i:262084;s:4:\"type\";s:3:\"png\";s:4:\"mime\";s:9:\"image/png\";}', 1, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 68),
(68, '[2023-09考古] meowjiao', '68', 1718286420, 1718288213, '<!--markdown-->![2024-06-13T13:46:39.png][1]\r\n\r\n# meowjiao原话（第三人称）\r\n\r\n2023年9月2日晚19时左右，在IT Craft Development Team内，meowjiao误操作了它的Meow Bot，导致自己的班级群名泄露，meowjiao撤回后，xxtg666使用防撤回看到它的学校、班级信息，meowjiao急了，退群。\r\n\r\n\r\n2023年9月3日上午，meowjiao在github论坛内发布了[加入请求](https://github.com/ITCraftDevelopmentTeam/Forum/issues/44)，ITCDT的成员对它进行了辱骂，This-is-XiaoDeng决定投票表决，XieXiLin2使用随机数选择了否，该请求被驳回。\r\n\r\n\r\n随后，meowjiao又对ITCDT群成员进行辱骂，9月6日，meowjiao又发布了一个[issue](https://github.com/ITCraftDevelopmentTeam/Forum/issues/45)，其中提到“被驳回的issue中, chun-awa发送\"深表nm歉意\", \"我们对宁加入申请未通过不表歉意\", meowjiao认为是“阻止他人保护自己的隐私”等不合理条目，颠倒黑白，捏造事实，laman28制作了“永远怀念”的图片，用于祭念meowjiao。\r\n\r\n\r\n*WIP*\r\n\r\n  [1]: https://joker-stuff.itcdt.top/usr/uploads/2024/06/1739696502.png', 0, 1, NULL, 'post', 'publish', NULL, 0, '1', '1', '1', 0),
(71, '931529F2D7A8A17EFCB526F418830D70.jpg', '931529F2D7A8A17EFCB526F418830D70-jpg', 1718624618, 1718624618, 'a:5:{s:4:\"name\";s:36:\"931529F2D7A8A17EFCB526F418830D70.jpg\";s:4:\"path\";s:35:\"/usr/uploads/2024/06/1581557162.jpg\";s:4:\"size\";i:1197938;s:4:\"type\";s:3:\"jpg\";s:4:\"mime\";s:10:\"image/jpeg\";}', 43, 1, NULL, 'attachment', 'publish', NULL, 0, '1', '0', '1', 4);

-- --------------------------------------------------------

--
-- 表的结构 `typecho_fields`
--

CREATE TABLE `typecho_fields` (
  `cid` int UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `type` varchar(8) DEFAULT 'str',
  `str_value` text,
  `int_value` int DEFAULT '0',
  `float_value` float DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- 表的结构 `typecho_metas`
--

CREATE TABLE `typecho_metas` (
  `mid` int UNSIGNED NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `slug` varchar(150) DEFAULT NULL,
  `type` varchar(32) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  `count` int UNSIGNED DEFAULT '0',
  `order` int UNSIGNED DEFAULT '0',
  `parent` int UNSIGNED DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_metas`
--

INSERT INTO `typecho_metas` (`mid`, `name`, `slug`, `type`, `description`, `count`, `order`, `parent`) VALUES
(1, '默认分类', 'default', 'category', '只是一个默认分类', 5, 0, 0);

-- --------------------------------------------------------

--
-- 表的结构 `typecho_options`
--

CREATE TABLE `typecho_options` (
  `name` varchar(32) NOT NULL,
  `user` int UNSIGNED NOT NULL DEFAULT '0',
  `value` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_options`
--

INSERT INTO `typecho_options` (`name`, `user`, `value`) VALUES
('actionTable', 0, 'a:0:{}'),
('allowRegister', 0, '0'),
('allowXmlRpc', 0, '2'),
('attachmentTypes', 0, '@image@,@media@,@doc@'),
('autoSave', 0, '0'),
('charset', 0, 'UTF-8'),
('commentDateFormat', 0, 'F jS, Y \\a\\t h:i a'),
('commentsAntiSpam', 0, '1'),
('commentsAutoClose', 0, '0'),
('commentsAvatar', 0, '1'),
('commentsAvatarRating', 0, 'G'),
('commentsCheckReferer', 0, '1'),
('commentsHTMLTagAllowed', 0, ''),
('commentsListSize', 0, '10'),
('commentsMarkdown', 0, '1'),
('commentsMaxNestingLevels', 0, '5'),
('commentsOrder', 0, 'ASC'),
('commentsPageBreak', 0, '0'),
('commentsPageDisplay', 0, 'last'),
('commentsPageSize', 0, '20'),
('commentsPostInterval', 0, '60'),
('commentsPostIntervalEnable', 0, '1'),
('commentsPostTimeout', 0, '2592000'),
('commentsRequireMail', 0, '1'),
('commentsRequireModeration', 0, '0'),
('commentsRequireURL', 0, '0'),
('commentsShowCommentOnly', 0, '0'),
('commentsShowUrl', 0, '1'),
('commentsThreaded', 0, '1'),
('commentsUrlNofollow', 0, '1'),
('commentsWhitelist', 0, '0'),
('contentType', 0, 'text/html'),
('defaultAllowComment', 0, '1'),
('defaultAllowFeed', 0, '1'),
('defaultAllowPing', 0, '1'),
('defaultCategory', 0, '1'),
('description', 0, 'joker stuff'),
('editorSize', 0, '350'),
('feedFullText', 0, '1'),
('frontArchive', 0, '0'),
('frontPage', 0, 'recent'),
('generator', 0, 'Typecho 1.2.1'),
('gzip', 0, '0'),
('installed', 0, '1'),
('keywords', 0, 'typecho,php,blog'),
('lang', 0, NULL),
('markdown', 0, '1'),
('pageSize', 0, '5'),
('panelTable', 0, 'a:0:{}'),
('plugin:live2dv3', 0, 'a:5:{s:13:\"choose_models\";s:7:\"Sparkle\";s:8:\"position\";s:4:\"left\";s:12:\"custom_width\";s:0:\"\";s:13:\"custom_height\";s:3:\"300\";s:6:\"hidden\";s:1:\"1\";}'),
('plugins', 0, 'a:2:{s:9:\"activated\";a:1:{s:8:\"live2dv3\";a:1:{s:7:\"handles\";a:2:{s:21:\"Widget_Archive:header\";a:1:{i:0;a:2:{i:0;s:15:\"live2dv3_Plugin\";i:1;s:6:\"header\";}}s:21:\"Widget_Archive:footer\";a:1:{i:0;a:2:{i:0;s:15:\"live2dv3_Plugin\";i:1;s:6:\"footer\";}}}}}s:7:\"handles\";a:2:{s:21:\"Widget_Archive:header\";a:1:{i:0;a:2:{i:0;s:15:\"live2dv3_Plugin\";i:1;s:6:\"header\";}}s:21:\"Widget_Archive:footer\";a:1:{i:0;a:2:{i:0;s:15:\"live2dv3_Plugin\";i:1;s:6:\"footer\";}}}}'),
('postDateFormat', 0, 'Y-m-d'),
('postsListSize', 0, '10'),
('rewrite', 0, '0'),
('routingTable', 0, 'a:26:{i:0;a:25:{s:5:\"index\";a:6:{s:3:\"url\";s:1:\"/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:8:\"|^[/]?$|\";s:6:\"format\";s:1:\"/\";s:6:\"params\";a:0:{}}s:7:\"archive\";a:6:{s:3:\"url\";s:6:\"/blog/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:13:\"|^/blog[/]?$|\";s:6:\"format\";s:6:\"/blog/\";s:6:\"params\";a:0:{}}s:2:\"do\";a:6:{s:3:\"url\";s:22:\"/action/[action:alpha]\";s:6:\"widget\";s:14:\"\\Widget\\Action\";s:6:\"action\";s:6:\"action\";s:4:\"regx\";s:32:\"|^/action/([_0-9a-zA-Z-]+)[/]?$|\";s:6:\"format\";s:10:\"/action/%s\";s:6:\"params\";a:1:{i:0;s:6:\"action\";}}s:4:\"post\";a:6:{s:3:\"url\";s:24:\"/archives/[cid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:26:\"|^/archives/([0-9]+)[/]?$|\";s:6:\"format\";s:13:\"/archives/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"cid\";}}s:10:\"attachment\";a:6:{s:3:\"url\";s:26:\"/attachment/[cid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:28:\"|^/attachment/([0-9]+)[/]?$|\";s:6:\"format\";s:15:\"/attachment/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"cid\";}}s:8:\"category\";a:6:{s:3:\"url\";s:17:\"/category/[slug]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:25:\"|^/category/([^/]+)[/]?$|\";s:6:\"format\";s:13:\"/category/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}s:3:\"tag\";a:6:{s:3:\"url\";s:12:\"/tag/[slug]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:20:\"|^/tag/([^/]+)[/]?$|\";s:6:\"format\";s:8:\"/tag/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}s:6:\"author\";a:6:{s:3:\"url\";s:22:\"/author/[uid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:24:\"|^/author/([0-9]+)[/]?$|\";s:6:\"format\";s:11:\"/author/%s/\";s:6:\"params\";a:1:{i:0;s:3:\"uid\";}}s:6:\"search\";a:6:{s:3:\"url\";s:19:\"/search/[keywords]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:23:\"|^/search/([^/]+)[/]?$|\";s:6:\"format\";s:11:\"/search/%s/\";s:6:\"params\";a:1:{i:0;s:8:\"keywords\";}}s:10:\"index_page\";a:6:{s:3:\"url\";s:21:\"/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:22:\"|^/page/([0-9]+)[/]?$|\";s:6:\"format\";s:9:\"/page/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"page\";}}s:12:\"archive_page\";a:6:{s:3:\"url\";s:26:\"/blog/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:27:\"|^/blog/page/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/blog/page/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"page\";}}s:13:\"category_page\";a:6:{s:3:\"url\";s:32:\"/category/[slug]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:34:\"|^/category/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:16:\"/category/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"slug\";i:1;s:4:\"page\";}}s:8:\"tag_page\";a:6:{s:3:\"url\";s:27:\"/tag/[slug]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:29:\"|^/tag/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:11:\"/tag/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"slug\";i:1;s:4:\"page\";}}s:11:\"author_page\";a:6:{s:3:\"url\";s:37:\"/author/[uid:digital]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:33:\"|^/author/([0-9]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/author/%s/%s/\";s:6:\"params\";a:2:{i:0;s:3:\"uid\";i:1;s:4:\"page\";}}s:11:\"search_page\";a:6:{s:3:\"url\";s:34:\"/search/[keywords]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:32:\"|^/search/([^/]+)/([0-9]+)[/]?$|\";s:6:\"format\";s:14:\"/search/%s/%s/\";s:6:\"params\";a:2:{i:0;s:8:\"keywords\";i:1;s:4:\"page\";}}s:12:\"archive_year\";a:6:{s:3:\"url\";s:18:\"/[year:digital:4]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:19:\"|^/([0-9]{4})[/]?$|\";s:6:\"format\";s:4:\"/%s/\";s:6:\"params\";a:1:{i:0;s:4:\"year\";}}s:13:\"archive_month\";a:6:{s:3:\"url\";s:36:\"/[year:digital:4]/[month:digital:2]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:30:\"|^/([0-9]{4})/([0-9]{2})[/]?$|\";s:6:\"format\";s:7:\"/%s/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"year\";i:1;s:5:\"month\";}}s:11:\"archive_day\";a:6:{s:3:\"url\";s:52:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:41:\"|^/([0-9]{4})/([0-9]{2})/([0-9]{2})[/]?$|\";s:6:\"format\";s:10:\"/%s/%s/%s/\";s:6:\"params\";a:3:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:3:\"day\";}}s:17:\"archive_year_page\";a:6:{s:3:\"url\";s:38:\"/[year:digital:4]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:33:\"|^/([0-9]{4})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:12:\"/%s/page/%s/\";s:6:\"params\";a:2:{i:0;s:4:\"year\";i:1;s:4:\"page\";}}s:18:\"archive_month_page\";a:6:{s:3:\"url\";s:56:\"/[year:digital:4]/[month:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:44:\"|^/([0-9]{4})/([0-9]{2})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:15:\"/%s/%s/page/%s/\";s:6:\"params\";a:3:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:4:\"page\";}}s:16:\"archive_day_page\";a:6:{s:3:\"url\";s:72:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:55:\"|^/([0-9]{4})/([0-9]{2})/([0-9]{2})/page/([0-9]+)[/]?$|\";s:6:\"format\";s:18:\"/%s/%s/%s/page/%s/\";s:6:\"params\";a:4:{i:0;s:4:\"year\";i:1;s:5:\"month\";i:2;s:3:\"day\";i:3;s:4:\"page\";}}s:12:\"comment_page\";a:6:{s:3:\"url\";s:53:\"[permalink:string]/comment-page-[commentPage:digital]\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:36:\"|^(.+)/comment\\-page\\-([0-9]+)[/]?$|\";s:6:\"format\";s:18:\"%s/comment-page-%s\";s:6:\"params\";a:2:{i:0;s:9:\"permalink\";i:1;s:11:\"commentPage\";}}s:4:\"feed\";a:6:{s:3:\"url\";s:20:\"/feed[feed:string:0]\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:4:\"feed\";s:4:\"regx\";s:17:\"|^/feed(.*)[/]?$|\";s:6:\"format\";s:7:\"/feed%s\";s:6:\"params\";a:1:{i:0;s:4:\"feed\";}}s:8:\"feedback\";a:6:{s:3:\"url\";s:31:\"[permalink:string]/[type:alpha]\";s:6:\"widget\";s:16:\"\\Widget\\Feedback\";s:6:\"action\";s:6:\"action\";s:4:\"regx\";s:29:\"|^(.+)/([_0-9a-zA-Z-]+)[/]?$|\";s:6:\"format\";s:5:\"%s/%s\";s:6:\"params\";a:2:{i:0;s:9:\"permalink\";i:1;s:4:\"type\";}}s:4:\"page\";a:6:{s:3:\"url\";s:12:\"/[slug].html\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";s:4:\"regx\";s:22:\"|^/([^/]+)\\.html[/]?$|\";s:6:\"format\";s:8:\"/%s.html\";s:6:\"params\";a:1:{i:0;s:4:\"slug\";}}}s:5:\"index\";a:3:{s:3:\"url\";s:1:\"/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:7:\"archive\";a:3:{s:3:\"url\";s:6:\"/blog/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:2:\"do\";a:3:{s:3:\"url\";s:22:\"/action/[action:alpha]\";s:6:\"widget\";s:14:\"\\Widget\\Action\";s:6:\"action\";s:6:\"action\";}s:4:\"post\";a:3:{s:3:\"url\";s:24:\"/archives/[cid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:10:\"attachment\";a:3:{s:3:\"url\";s:26:\"/attachment/[cid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:8:\"category\";a:3:{s:3:\"url\";s:17:\"/category/[slug]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:3:\"tag\";a:3:{s:3:\"url\";s:12:\"/tag/[slug]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:6:\"author\";a:3:{s:3:\"url\";s:22:\"/author/[uid:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:6:\"search\";a:3:{s:3:\"url\";s:19:\"/search/[keywords]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:10:\"index_page\";a:3:{s:3:\"url\";s:21:\"/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"archive_page\";a:3:{s:3:\"url\";s:26:\"/blog/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:13:\"category_page\";a:3:{s:3:\"url\";s:32:\"/category/[slug]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:8:\"tag_page\";a:3:{s:3:\"url\";s:27:\"/tag/[slug]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"author_page\";a:3:{s:3:\"url\";s:37:\"/author/[uid:digital]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"search_page\";a:3:{s:3:\"url\";s:34:\"/search/[keywords]/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"archive_year\";a:3:{s:3:\"url\";s:18:\"/[year:digital:4]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:13:\"archive_month\";a:3:{s:3:\"url\";s:36:\"/[year:digital:4]/[month:digital:2]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:11:\"archive_day\";a:3:{s:3:\"url\";s:52:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:17:\"archive_year_page\";a:3:{s:3:\"url\";s:38:\"/[year:digital:4]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:18:\"archive_month_page\";a:3:{s:3:\"url\";s:56:\"/[year:digital:4]/[month:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:16:\"archive_day_page\";a:3:{s:3:\"url\";s:72:\"/[year:digital:4]/[month:digital:2]/[day:digital:2]/page/[page:digital]/\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:12:\"comment_page\";a:3:{s:3:\"url\";s:53:\"[permalink:string]/comment-page-[commentPage:digital]\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}s:4:\"feed\";a:3:{s:3:\"url\";s:20:\"/feed[feed:string:0]\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:4:\"feed\";}s:8:\"feedback\";a:3:{s:3:\"url\";s:31:\"[permalink:string]/[type:alpha]\";s:6:\"widget\";s:16:\"\\Widget\\Feedback\";s:6:\"action\";s:6:\"action\";}s:4:\"page\";a:3:{s:3:\"url\";s:12:\"/[slug].html\";s:6:\"widget\";s:15:\"\\Widget\\Archive\";s:6:\"action\";s:6:\"render\";}}'),
('secret', 0, '6lwgRofDIOMVOQl^u0pSxqlFpWwwL3nY'),
('siteUrl', 0, 'https://joker-stuff.itcdt.top'),
('theme', 0, 'asprie'),
('timezone', 0, '28800'),
('title', 0, '乐子 BLOG'),
('xmlrpcMarkdown', 0, '0');

-- --------------------------------------------------------

--
-- 表的结构 `typecho_relationships`
--

CREATE TABLE `typecho_relationships` (
  `cid` int UNSIGNED NOT NULL,
  `mid` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_relationships`
--

INSERT INTO `typecho_relationships` (`cid`, `mid`) VALUES
(1, 1),
(4, 1),
(39, 1),
(42, 1),
(44, 1),
(68, 1);

-- --------------------------------------------------------

--
-- 表的结构 `typecho_users`
--

CREATE TABLE `typecho_users` (
  `uid` int UNSIGNED NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `mail` varchar(150) DEFAULT NULL,
  `url` varchar(150) DEFAULT NULL,
  `screenName` varchar(32) DEFAULT NULL,
  `created` int UNSIGNED DEFAULT '0',
  `activated` int UNSIGNED DEFAULT '0',
  `logged` int UNSIGNED DEFAULT '0',
  `group` varchar(16) DEFAULT 'visitor',
  `authCode` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- 转存表中的数据 `typecho_users`
--

INSERT INTO `typecho_users` (`uid`, `name`, `password`, `mail`, `url`, `screenName`, `created`, `activated`, `logged`, `group`, `authCode`) VALUES
(1, 'chun-awa', NULL, NULL, 'https://joker-stuff.itcdt.top', 'chun-awa', 1718015176, 1720316115, 1718461769, 'administrator', '9c2c0eb51de9be672d45ec265119d9bf'),
(2, 'XiaoDeng3386', NULL, NULL, 'https://thisisxd.top', 'XiaoDeng3386', 1718015328, 1718805932, 1718204054, 'administrator', 'b8ce51488c07d75d4bbed0d76a746b70'),
(3, 'Cola Leo', NULL, NULL, 'https://lty.ilty.top', 'lsk-china', 1718015644, 0, 0, 'administrator', NULL);

--
-- 转储表的索引
--

--
-- 表的索引 `typecho_comments`
--
ALTER TABLE `typecho_comments`
  ADD PRIMARY KEY (`coid`),
  ADD KEY `cid` (`cid`),
  ADD KEY `created` (`created`);

--
-- 表的索引 `typecho_contents`
--
ALTER TABLE `typecho_contents`
  ADD PRIMARY KEY (`cid`),
  ADD UNIQUE KEY `slug` (`slug`),
  ADD KEY `created` (`created`);

--
-- 表的索引 `typecho_fields`
--
ALTER TABLE `typecho_fields`
  ADD PRIMARY KEY (`cid`,`name`),
  ADD KEY `int_value` (`int_value`),
  ADD KEY `float_value` (`float_value`);

--
-- 表的索引 `typecho_metas`
--
ALTER TABLE `typecho_metas`
  ADD PRIMARY KEY (`mid`),
  ADD KEY `slug` (`slug`);

--
-- 表的索引 `typecho_options`
--
ALTER TABLE `typecho_options`
  ADD PRIMARY KEY (`name`,`user`);

--
-- 表的索引 `typecho_relationships`
--
ALTER TABLE `typecho_relationships`
  ADD PRIMARY KEY (`cid`,`mid`);

--
-- 表的索引 `typecho_users`
--
ALTER TABLE `typecho_users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `mail` (`mail`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `typecho_comments`
--
ALTER TABLE `typecho_comments`
  MODIFY `coid` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用表AUTO_INCREMENT `typecho_contents`
--
ALTER TABLE `typecho_contents`
  MODIFY `cid` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- 使用表AUTO_INCREMENT `typecho_metas`
--
ALTER TABLE `typecho_metas`
  MODIFY `mid` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `typecho_users`
--
ALTER TABLE `typecho_users`
  MODIFY `uid` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
