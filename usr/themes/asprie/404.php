<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<?php $this->need('header.php'); ?>

    <div class="o-grid">
      <div class="o-grid__col o-grid__col--full">
        <div class="c-archive">
          <h4 class="c-archive__title">404 - <?php _e('页面没找到'); ?></h4>
            <p class="c-archive__description">
              <?php _e('你想查看的页面已被转移或删除了'); ?>
            </p>
        </div>
      </div>
    </div>

        <div class="o-grid js-grid">

<div class="o-grid__col o-grid__col--full">
        <h4 class="u-left">最新文章</h4>
        <a href="<?php $this->options->siteUrl(); ?>" class="u-right u-font-medium">返回首页</a>
      </div>

<?php $this->widget('Widget_Contents_Post_Recent', 'pageSize=6')->to($contents); ?>
<?php while($contents->next()): ?>
            <div class="o-grid__col o-grid__col--4-4-s o-grid__col--2-4-m o-grid__col--1-3-l c-post-card-wrap js-post-card-wrap ">
                <div class="c-post-card ">
                    <div class="c-post-card__media">
                        <a href="<?php $contents->permalink() ?>" class="js-fadein c-post-card__image" style="background-image: url(<?php if (array_key_exists('img',unserialize($contents->___fields()))): ?><?php $contents->fields->img(); ?>_580x330.jpg<?php else: ?><?php
preg_match_all("/\<img.*?src\=(\'|\")(.*?)(\'|\")[^>]*>/i", $contents->content, $matches);
$imgCount = count($matches[0]);
if($imgCount >= 1){
$img = $matches[2][0];
echo <<<Html
{$img}
Html;
}
?><?php endif; ?>)">
                        <?php if (array_key_exists('star',unserialize($contents->___fields()))): ?><span title="Featured Post">
                        <div class="icon icon--ei-star icon--s c-post-card--featured__icon">
                            <svg class="icon__cnt"><use xlink:href="#ei-star-icon"></use></svg>
                        </div>
                        </span><?php endif; ?>
                        </a>
                    </div>
                    <div class="c-post-card__meta">
                        <?php $contents->category(' '); ?> - 
                        <div class="c-post-card__date">
                            <time datetime="<?php $contents->date('c'); ?>"><?php $contents->date(); ?></time>
                        </div>
                        <h2 class="c-post-card__title">
                        <a href="<?php $contents->permalink() ?>" class="c-post-card__link"><?php $contents->title() ?></a>
                        </h2>
                    </div>
                </div>
            </div>
<?php endwhile; ?>
        </div>
<?php $this->need('footer.php'); ?>
